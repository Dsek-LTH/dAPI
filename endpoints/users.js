var express = require('express');
var router = express.Router();
var db = require('../Database');

/* GET a user from the database. */
router.get('/:id', function(req, res, next) {
  db.getUser(req.query,function (callback) {
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(callback));
  })
});

module.exports = router;
