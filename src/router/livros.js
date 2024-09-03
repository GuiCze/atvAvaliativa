const express = require("express")
const router = express.Router()

const livros = require("../controllers/livros.js")

router.post("/", (req, res) => {
    const body = req.body;
    const code = livros.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = livros.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = livros.show(req.params.id);
    res.json(code);
});

router.put("/:id",  (req, res) => {
    const body = req.body;
    const code = livros.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    livros.destroy(req.params.id);
    res.json();
})

module.exports = router;