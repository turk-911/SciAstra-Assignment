const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const pass = process.env.PASSWORD;
const name = process.env.DATABASE_NAME;
console.log(pass, name);
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: pass,
  database: name,
});
db.connect((err) => {
  if (err) throw err;
  console.log("MYSQL connected.");
});
module.exports = db;
