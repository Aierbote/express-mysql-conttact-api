// imports
const mysql = require("mysql");

// variables
const dbName = "NodeDB";
const tableName = "Contatti";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: dbName,
});

connection.connect((err) => {
  console.log(`Connecting to database named ${dbName}...`);
  if (err) {
    console.log(`FAILED! Server localhost:3306 may not be online.`);
    throw err;
  };

  console.log("Connected!");

  const sql = `
    CREATE TABLE ${tableName} (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) DEFAULT NULL,
    telefono VARCHAR(13) DEFAULT NULL,
    email VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
  `;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(`It seems that table ${tableName} already exists.`);
      throw err;
    };

    console.log(`TABLE ${tableName} succesfully created! 🎉`)
  });
})