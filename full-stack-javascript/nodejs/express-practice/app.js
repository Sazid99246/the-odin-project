const express = require('express');
const path = require("path");
const app = express();
const authorRouter = require("./routes/authorRouter");
const indexRouter = require("./routes/indexRouter");
const bookRouter = require("./routes/bookRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.use((req, res, next) => {
  throw new Error("OH NO!");
  // or next(new Error("OH NO!"));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});


const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first express app - listening on port ${PORT}`);  
})