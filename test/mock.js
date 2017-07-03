const assert = require('assert');
const db = require('../Database');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('#Database.js', function () {
  it('Should return a row containing all the information of a user', function () {
    var query = {"id":"1"};
    var answer = 0;
    db.getUser(query,function (callback) {
      answer = callback;
    });
    assert.equal(1,answer);
  });
});
