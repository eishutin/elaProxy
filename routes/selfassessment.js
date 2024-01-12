var express = require('express');
var router = express.Router();
var proxy = require('express-http-proxy');

  
require('../helper/helper.js')();

var url = "https://acs-ipze.pp.ua";

router.get('/api/subdivision/all', proxy(`${url}`, {
    proxyReqPathResolver: (req) => {
      incomingRequestLog(req, url);
      return req.url;
    },
    userResDecorator: (proxyRes, proxyResData) => {
      outcommingRequestLog(proxyResData);
      return proxyResData;
    },
  }));

  module.exports = router;