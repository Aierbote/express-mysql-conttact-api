// imports
const mysql = require("mysql");

// variables
const dbName = "NodeDB";
const connection = mysql.createConnection({  // a config object as arg
  host: "localhost",
  user: "root",
  port: 3306
});

connection.connect((err) => {
  console.log(`Connecting to database named ${dbName}...`);
  if (err) {
    console.log(`FAILED! Server ${connection.config.host}:${connection.config.port} may not be online at the moment.`);

    return;
  };

  console.log("Connected!");

  connection.query(`CREATE DATABASE ${dbName}`, (err, result) => {
    if (err) {
      console.log(`It seems that db ${dbName} already exists.`);
    } else {
      console.log(`Database ${dbName} succesfully created! 🎉`);
    };

    connection.end((err) => {
      if (err) {
        console.error(`Closing connection to ${connection.config.database} for creating db ${dbName}: FAILED!`);
        return;
      }
      console.log(`Connection to ${connection.config.database}: CLOSED 😉`)
    })
  });
})
