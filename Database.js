var mysql = require('mysql');
// the Database connection information goes here
var dbConfig = {
  host: "",
  user: "",
  password: "",
  database: ""
};

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

  }
}
