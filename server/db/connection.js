const mysql = require("mysql");

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "",
    database: "bencom",
  });
  module.exports = db;