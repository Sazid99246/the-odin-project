const { Router } = require('express');
const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Hello, World");
})

indexRouter.get("/about", (req, res) => {
    res.send("About page");
})

indexRouter.get("/contact", (req, res) => {
    res.send("Contact page");
})

indexRouter.post("/contact", (req, res) => {
    res.send("Contact form submitted (POST)");
});

module.exports = indexRouter;