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

async function whoisLookup(domain) {
  var host = 'whois.verisign-grs.com';
  var hostPort = 43;
  var proxyIp = '82.165.209.112';
  var proxyPort = 1080;

  var options = {
    server: host,
    serverPort: hostPort,
    proxy: {
      ip: proxyIp,
      port: proxyPort,
      type: ProxyType.SOCKS5
    }
  };
  var res = await whoisClient(domain, true, options);

  console.log(res)
  console.log(res.parsedData);
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
