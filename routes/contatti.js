// imports
const express = require("express");

// variables
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>📇 Contatti route is displaying data</h1>")
})

router.get("/:id", (req, res) => {
  if (req.params.id == 42) {
    res.send(`<img src="http://media.salon.com/2016/03/douglas_adams.jpg" alt="42! Pics of the famous Novel by Douglas Adams" title="DON'T PANIC 👍">`)
  }
  res.send(`Looking for Contact with id:<b>${req.params.id}</b>`);
})

router.post("/", (req, res) => {
  res.send(`Sending info to create a Contact 👽`)
});

router.put("/:id", (req, res) => {
  res.send(`Sending info to update Contact with id:<b>${req.params.id}</b>`)
})

router.delete("/:id", (req, res) => {
  res.send(`Deleting Contact with id:<b>${req.params.id}</b>`);
});

module.exports = router;