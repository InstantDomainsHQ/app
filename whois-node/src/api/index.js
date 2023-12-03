const express = require('express');

const whois = require('./whois');

const router = express.Router();

router.get('/', (req, res) => {
  console.log("req 1 params: ", req.params)
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/whois', whois);

module.exports = router;
