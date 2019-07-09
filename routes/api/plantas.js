var express = require('express');
var router = express.Router();

function initPlanta(db) {
  var plantasColl = db.collection('plantas');
  router.get('/', (req, res, next)=>{
    res.status(200).json({"api":"1"});
  });
  return router;
}

module.exports = initPlanta;
