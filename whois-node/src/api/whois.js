const express = require('express');
const moment = require('moment');
const whoisLib = require('xep-whois')
const {ProxyType} = require("xep-whois");
const whoisClient = whoisLib.whois

const router = express.Router();

function toTimestamp(dateString) {
  try {
    return moment.utc(dateString, 'YYYY-MM-DDTHHmmssZ').unix();
  } catch (e) {
    // pass
  }
  return null;
}

async function parseIrregularWhois(whoisResult, domain) {
  const strToDate = (dateString) => {
    if (domain.endsWith(".co.uk")) {
      return moment.utc(dateString, 'DD-MMM-YYYY').unix();
    } else if (domain.endsWith(".gg")) {
      return moment(dateString, 'Do MMMM YYYY [at] HH:mm:ss.SSS').unix();
    }
  }
  if (whoisResult) {
    const parts = whoisResult["_raw"].split("\n");
    let registeredOn, expiryDate, updatedAt;
    let relevantDates = false;
    for (let i = 0; i < parts.length; i++) {
      const line = parts[i].replace("\r", "").replace("\n", "").trim()
      if (line.startsWith("Relevant dates:")) {
        relevantDates = true;
        continue;
      }
      if (relevantDates) {
        if (line.startsWith("Registered on")) {
          registeredOn = strToDate(line.split("Registered on")[1].trim());
        } else if (line.startsWith("Expiry date:")) {
          expiryDate = strToDate(line.split("Expiry date:")[1].trim());
        } else if (line.startsWith("Last updated:")) {
          updatedAt = strToDate(line.split("Last updated:")[1].trim());
        }
      }
    }
    return {
      domainName: registeredOn && updatedAt && expiryDate ? domain : null,
      createdAt: registeredOn,
      updatedAt: updatedAt,
      expiresAt: expiryDate,
      domainStatus: []
    }
  }
  return {}
}

async function whoisLookup(domain) {
  let proxyIp, proxyPort;

  if (process.env.PROXY_HOST && process.env.PROXY_PORT) {
    proxyIp = process.env.PROXY_HOST;
    proxyPort = Number(process.env.PROXY_PORT);
  }

  let options = {};
  if (proxyIp && proxyPort) {
    options = {
      proxy: {
        ip: proxyIp,
        port: proxyPort,
        type: ProxyType.SOCKS5
      }
    };
  }

  let res = {}
  try {
    res = await whoisClient(domain, true, options);
  } catch (e) {
    console.error(e)
  }
  // console.debug(res);
  if (domain.endsWith(".co.uk") || domain.endsWith(".gg")) {
    return await parseIrregularWhois(res, domain)
  }
  console.log("domain: ", domain, " length: ", res["_raw"].length)
  if (res["parsedData"]) {
    return {
      domainName: res["parsedData"]["Domain Name"],
      createdAt: toTimestamp(res["parsedData"]["Creation Date"]),
      updatedAt: toTimestamp(res["parsedData"]["Updated Date"]),
      expiresAt: toTimestamp(res["parsedData"]["Registry Expiry Date"]),
      domainStatus: res["parsedData"]["Domain Status"]
    }
  }
  return {
    domainName: '',
    createdAt: null,
    updatedAt: null,
    expiresAt: null,
    domainStatus: null
  }
  return {
    domainName: res["parsedData"]
  }
  return

}

router.get('/', async (req, res) => {
  res.json(await whoisLookup(req.query.domainName));
});

module.exports = router;
