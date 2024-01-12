var express = require('express');
var router = express.Router();
var proxy = require('express-http-proxy');
var processingValidator = require('../validators/analyzer/processingValidator');
var specValidator = require('../validators/analyzer/specialtiesValidator');
var rulesValidator = require('../validators/analyzer/rulesValidator');

var url = "http://localhost:8080";

router.post(
  '/processing',
  function(req, res, next) {
    validatorLog(req);
    if(!processingValidator.isValid(req)){
      res.status(400);
      res.send("Invalid filename parameter");
      return res;
    }
    next();
  },
  proxy(`${url}`, {
    proxyReqPathResolver: (req) => {
        incomingRequestLog(req, url);
        return req.url;
    },
    userResDecorator: (proxyRes, proxyResData) => {
        outcommingRequestLog(proxyResData);
        return proxyResData;
    },
  }
));

router.post(
  '/specialties/add',
  function(req, res, next) {
    validatorLog(req);
    if(!specValidator.isValid(req)){
      res.status(400);
      res.send("Invalid body. Every specialty should be a numbers of 3 digits");
      return res;
    }
    next();
  },
   proxy(`${url}`, {
    proxyReqPathResolver: (req) => {
        incomingRequestLog(req, url);
        return req.url;
      },
      userResDecorator: (proxyRes, proxyResData) => {
        outcommingRequestLog(proxyResData);
        return proxyResData;
      },
}));

router.delete(
  '/specialties/remove',
  function(req, res, next) {
    validatorLog(req);
    if(!specValidator.isValid(req)){
      res.status(400);
      res.send("Invalid body. Every specialty should be a number of 3 digits");
      return res;
    }
    next();
  }, 
  proxy(`${url}`, {
    proxyReqPathResolver: (req) => {
        incomingRequestLog(req, url);
        return req.url;
      },
      userResDecorator: (proxyRes, proxyResData) => {
        outcommingRequestLog(proxyResData);
        return proxyResData;
      },
}));

router.get(
  '/specialties',
  proxy(`${url}`, {
    proxyReqPathResolver: (req) => {
        incomingRequestLog(req, url);
        return req.url;
      },
      userResDecorator: (proxyRes, proxyResData) => {
        outcommingRequestLog(proxyResData);
        return proxyResData;
      },
}));

router.get('/rules', proxy(`${url}`, {
    proxyReqPathResolver: (req) => {
        incomingRequestLog(req, url);
        return req.url;
      },
      userResDecorator: (proxyRes, proxyResData) => {
        outcommingRequestLog(proxyResData);
        return proxyResData;
      },
}));

router.post(
  '/rules/update',
  function(req, res, next) {
    validatorLog(req);
    if(!rulesValidator.isValid(req)){
      res.status(400);
      res.send("Invalid body. Every rule key should be a number. Value should be empty or array of strings");
      return res;
    }
    next();
  }, 
  proxy(`${url}`, {
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