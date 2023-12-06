// imports
const mysql = require("mysql");

// variables
const dbName = "NodeDB";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root"
});

connection.connect((err) => {
  console.log(`Connecting to database named ${dbName}...`);
  if (err) {
    console.log(`FAILED! Server localhost:3306 mayb not be online.`);
    throw err;
  };

  console.log("Connected!");

  connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
    if (err) {
      console.log(`It seems that db ${dbName} already exists.`);
      throw err;
    };

    console.log(`Database ${dbName} succesfully created! 🎉`)
  });
})
