// imports
const mysql = require("mysql");

// variables
const dbName = "NodeDB";
const tableName = "Contatti";
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  database: dbName,
});

connection.connect((err) => {
  console.log(`Connecting to database named ${dbName}...`);
  if (err) {
    console.log(`FAILED! Server ${connection.config.host}:${connection.config.port} may not be online.`);

    return
  };

  console.log("Connected!");

  const sql = `
    CREATE TABLE IF NOT EXISTS \`${tableName}\` (
    \`id\` INT NOT NULL AUTO_INCREMENT,
    \`nome\` VARCHAR(45) DEFAULT NULL,
    \`telefono\` VARCHAR(13) DEFAULT NULL,
    \`email\` VARCHAR(45) DEFAULT NULL,
    PRIMARY KEY (id)
  ) `;
  connection.query(sql, (err, result) => {
    if (err) {
      console.log(`It seems that table ${tableName} already exists.`);

      return;
    };

    console.log(`TABLE ${tableName} succesfully created! 🎉 (Or already existing)`)
  });
})