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
    console.log(`FAILED! Server localhost:3306 mayb not be online.`);
    throw err;
  };

  console.log("Connected!");

  const sql = `CREATE TABLE ${tableName} (nome VARCHAR(255), telefono VARCHAR(13), email VARCHAR(255)) `;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(`It seems that table ${tableName} already exists.`);
      throw err;
    };

    console.log(`TABLE ${tableName} succesfully created! 🎉`)
  });
})