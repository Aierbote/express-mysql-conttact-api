// imports
const express = require("express");
const mysql = require("mysql");

// variables
let msg; // message to render in html as response
let sql; // query for each METHOD
const router = express.Router();
const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "NodeDB",
});
const tableName = "Contatti";

router.use(express.json());

router.get("/", (req, res) => {
  msg = `<h1>📇 Contatti route is displaying data</h1>`;
  sql = `SELECT * FROM ${tableName}`;

  conn.query(sql, (err, results) => {
    if (err) {
      console.error(`Problem during GET '/': ${err.message}`);
      res.status(500).send('Errore del server');
    }

    // // raw result
    // res.json(results);

    msg = `
      ${msg}
      <p>QUERY: ${sql}</p>
      <p>Results:</p>
      <!-- TODO: make it into a list with forEach() -->
      <p>${JSON.stringify(results)}</p>
    `;
    res.send(msg);
  });
})

router.get("/:id", (req, res) => {
  msg = `<p>Looking for Contact with id:<b>${req.params.id}</b></p>`;

  if (req.params.id == 42) {
    msg += `<img src="http://media.salon.com/2016/03/douglas_adams.jpg" alt="42! Pics of the famous Novel by Douglas Adams" title="DON'T PANIC 👍">`;
  };
  res.send(msg);
})

router.post("/", (req, res) => {
  msg = `<p>Sending info to create a Contact 👽</p>`;
  res.send(msg)
});

router.put("/:id", (req, res) => {
  msg = `<p>Sending info to update Contact with id:<b>${req.params.id}</b></p>`;
  res.send(msg);
})

router.delete("/:id", (req, res) => {
  msg = `<p>Deleting Contact with id:<b>${req.params.id}</b></p>`;
  res.send(msg);
});

module.exports = router;