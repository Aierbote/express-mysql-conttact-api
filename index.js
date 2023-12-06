// import
const express = require("express");
const contattiRoute = require("./routes/contatti")

// variables
const MY_PORT = 3000;
const app = express();

app.use("/contatti", contattiRoute);
app.listen(MY_PORT, () => {
  console.log(`Port:${MY_PORT} is listening...`);
});

