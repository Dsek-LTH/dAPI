const Sequelize = require ("sequelize");
const sequelize = new Sequelize('dapi','dapi','password',{
  host: 'localhost',
  dialect: 'mysql',
  pool : {
    max: 5,
    min:0,
    idle:10000
  }
});

sequelize.authenticate().then(()=> {
  console.log("con has been established");
}).catch(err => {
  console.error("unable to connect", err);
});

module.exports = sequelize;
