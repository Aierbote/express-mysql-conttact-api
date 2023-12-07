// imports
const express = require("express");


// variables
const router = express.Router();
let msg;

router.get("/", (req, res) => {
  msg = `<h1>📇 Contatti route is displaying data</h1>`;

  res.send(msg);

  // my API doing Read
})

router.get("/:id", (req, res) => {
  msg = `<p>Looking for Contact with id:<b>${req.params.id}</b></p>`;

  if (req.params.id == 42) {
    msg += `<img src="http://media.salon.com/2016/03/douglas_adams.jpg" alt="42! Pics of the famous Novel by Douglas Adams" title="DON'T PANIC 👍">`;
  }
  res.send(msg);
})

router.post("/", (req, res) => {
  msg = `<p>Sending info to create a Contact 👽</p>`;
  res.send(msg);
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