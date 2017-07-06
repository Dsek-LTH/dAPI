var mysql = require('mysql');
var dbConfig = require('./configuration');

var con;

function query(sql,values,callback){ 
  con = mysql.createConnection(dbConfig);
  con.query(sql, [values], function (err, result,fields) {
    if(err)
      throw err; 
    else
      callback(result);
  });
  con.end();
}

module.exports = {

  exampleUsage: function(body,callback){
    var sql = "";
    var params = [];
    query(sql,param,callback);
  },

  createUser : function(body,callback){

  },

  getUser : function (params,callback) {
    var sql = "select * from user where id = ?";
    var values= [params.id];
    console.log("Pre query")
    query(sql,values,callback);
  },

  GiveRoleToUser : function (body,callback) {

  },

  CreatePost : function (body,callback) {

  },

  AddTagToPost : function (body,callback) {

  },

  addCurrancyOnUser : function (body,callback){
    var sql = 'UPDATE user SET Currancy = Currancy + ? WHERE email = ?';
    var params = [body.amount,body.email];
    query(sql,params, callback);
  },
  
  subCurrancyOnUser : function (body,callback) {
    var sql = 'UPDATE user SET Currancy = Currancy + ? WHERE email = ?';
    var params = [body.amount,body.email];
    query(sql,params,callback);
  },

  addCardOnUser : function (body,callback) {
    var sql = 'UPDATE user SET Currancy = Currancy + ? WHERE email = ?';
    var params = [body.amount,body.email];
    query(sql,params,callback);
  },

  getFunds : function (body, callback) {
    var sql = 'SELECT Currancy from user WHERE email = ?';
    var param = body.email;
    query(sql,param,callback);
  }
}
