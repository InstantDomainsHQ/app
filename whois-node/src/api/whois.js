const express = require('express');
const whoisLib = require('xep-whois')
const {ProxyType} = require("xep-whois");
const whoisClient = whoisLib.whois
// const whoisOptions = whoisLib.WhoIsOptions

const router = express.Router();

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

  console.log(res.parsedData);
  return res["parsedData"]

}

router.post('/', async (req, res) => {
  console.log("req: ", req.body)
  res.json({
    data: await whoisLookup(req.body.domains[0])
  });
});

module.exports = router;
