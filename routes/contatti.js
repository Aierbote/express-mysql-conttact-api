// imports
const express = require("express");
// NOTE : replaced `mysql` with `mysql2`
const mysql = require('mysql2');
// NOTE : replacing express.json() with body-parser.json
const bodyParser = require("body-parser");

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

// to parse `application/x-www-form-urlencoded`
router.use(bodyParser.urlencoded({ extended: false }));
// to parse `application/json`
router.use(bodyParser.json());

router.get("/", (req, res) => {
  msg = `<h1>📇 Contatti route is displaying data</h1>`;
  sql = `SELECT * FROM ${tableName}`;


  conn.query(sql, (err, results) => {
    if (err) {
      console.error(`Problem during GET '/': ${err.message}`);
      res.status(500).send('Internal Server Error');
    }

    // // raw result
    // res.json(results);

    // slightly formatted
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
  sql = `SELECT * FROM ${tableName} WHERE id = ${req.params.id}`;

  if (req.params.id == 42) {
    msg += `<img src="http://media.salon.com/2016/03/douglas_adams.jpg" alt="42! Pics of the famous Novel by Douglas Adams" title="DON'T PANIC 👍">`;
  };

  conn.query(sql, (err, results) => {
    if (err) {
      console.error(`Problem during GET '/:id': ${err.message}`);
      res.status(500).send('Internal Server Error');
    }

    // // raw result
    // res.json(results);

    // slightly formatted
    msg = `
      ${msg}
      <p>QUERY: ${sql}</p>
      <p>Results:</p>
      <!-- TODO: make it into a list with forEach() -->
      <p>${JSON.stringify(results)}</p>
    `;
    res.send(msg);
  });
});


router.post("/", (req, res) => {
  msg = `<p>Sending info to create a Contact 👽</p>`;
  sql = `
    INSERT INTO Contatti (nome, telefono, email)
    VALUES (?,?,?)
  `;
  // NOTE : using `req.query` instead of `req.body` or `req.params`
  const { nome, telefono, email } = req.query;

  conn.query(
    sql,
    [nome, telefono, email],
    (err, results) => {
      if (err) {
        console.error(`Problem during post '/': ${err.message}`);
        res.status(500).send('Internal Server Error');
        return;
      }

      // // raw result
      // res.json(results);

      // slightly formatted
      sql = sql.replace(`(?,?,?)`, `(${nome},${telefono},${email})`);
      msg = `
        ${msg}
        <p>QUERY: ${sql}</p>
        <p>Results:</p>
        <!-- TODO: make it into a list with forEach() -->
        <p>${JSON.stringify(results)}</p>
      `;
      res.send(msg);
    }
  );
});


router.put("/:id", (req, res) => {
  msg = `<p>Sending info to update Contact with id:<b>${req.params.id}</b></p>`;
  sql = `
    UPDATE Contatti SET
    nome = ?,
    telefono = ?,
    email = ?
    WHERE id = ?
  `;



  const id = req.params.id;
  const { nome, telefono, email } = req.query;

  conn.query(
    sql,
    [nome, telefono, email, id],
    (err, results) => {
      if (err) {
        console.error(`Problem during put '/:id': ${err.message}`);
        res.status(500).send('Internal Server Error');
        return;
      }

      // // raw result
      // res.json(results);

      // slightly formatted
      let values = [nome, telefono, email, id]
      // replace any `?` (escaped) in a regex (delimited by `/`), with `g` global mode (not just first occurence)
      sql = sql.replace(/\?/g, () => values.shift() || "");
      msg = `
        ${msg}
        <p>QUERY: ${sql}</p>
        <p>Results:</p>
        <!-- TODO: make it into a list with forEach() -->
        <p>${JSON.stringify(results)}</p>
      `;
      res.send(msg);
    }
  );
})


router.delete("/:id", (req, res) => {
  msg = `<p>Deleting Contact with id:<b>${req.params.id}</b></p>`;
  sql = `DELETE FROM Contatti WHERE id = ${req.params.id}`;

  conn.query(sql, (err, results) => {
    if (err) {
      console.error(`Problem during delete '/:id': ${err.message}`);
      res.status(500).send('Internal Server Error');
    }

    // // raw result
    // res.json(results);

    // slightly formatted
    msg = `
        ${msg}
        <p>QUERY: ${sql}</p>
        <p>Results:</p>
        <!-- TODO: make it into a list with forEach() -->
        <p>${JSON.stringify(results)}</p>
      `;
    res.send(msg);
  });
});


module.exports = router;