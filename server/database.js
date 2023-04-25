// const mysql = require("mysql2");

// const conn = mysql.createConnection({
//     port: process.env.MYSQL_PORT,
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });

// conn.connect((err) =>{
//     if(err) {
//       console.log(err);
//       return;
//     }
//     console.log('Mysql Connected with App...');
//   });

// module.exports = conn;

const Pool = require("pg").Pool;

// var database_url = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_DATABASE}`;
var database_url = `postgres://cafe_aub_user:jvKOgqhc6P9vZPxSqggApveoJr1bP4FE@dpg-ch3h6kseoogsn038p180-a.oregon-postgres.render.com/cafe_aub`;
const conn = new Pool({
  connectionString: database_url,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = conn;
