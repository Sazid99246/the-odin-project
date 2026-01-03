const { Router } = require("express");

const bookRouter = Router();

bookRouter.get("/", (req, res) => res.send("All Books"));
bookRouter.get("/:bookId", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ID: ${bookId}`);
});

bookRouter.get("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`Reserve page for book ${bookId}`);
});

bookRouter.post("/:bookId/reserve", (req, res) => {
    const { bookId } = req.params;
    res.send(`Book ${bookId} reserved successfully`);
});

module.exports = bookRouter;
