const express = require("express");
const path = require("path");

const indexRouter = require("./routes/indexRouter");

const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", indexRouter);

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
