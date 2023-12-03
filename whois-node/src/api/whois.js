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

async function parseUkDomain(whoisResult, domain) {
  const strToDate = (dateString) => moment.utc(dateString, 'DD-MMM-YYYY').unix()
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
        if (line.startsWith("Registered on:")) {
          registeredOn = strToDate(line.split("Registered on:")[1].trim());
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
      expiresAt: expiryDate
    }
  }
  return {}
}

async function whoisLookup(domain) {
  var proxyIp = '82.165.209.112';
  var proxyPort = 1080;

  var options = {
    proxy: {
      ip: proxyIp,
      port: proxyPort,
      type: ProxyType.SOCKS5
    }
  };
  var res = await whoisClient(domain, true, options);

  console.debug(res.parsedData);
  if (domain.endsWith(".co.uk")) {
    return await parseUkDomain(res, domain)
  }
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
  console.log("req: ", req.query.domainName)
  res.json(await whoisLookup(req.query.domainName));
});

module.exports = router;
