const express = require("express")
const router = express.Router()

const alugueis = require("../controllers/alugueis.js")


router.post("/", (req, res) => {
    const body = req.body;
    const code = alugueis.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = alugueis.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = alugueis.show(req.params.id);
    res.json(code);
});

router.put("/:id",  (req, res) => {
    const body = req.body;
    const code = alugueis.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    alugueis.destroy(req.params.id);
    res.json();
})

module.exports = router;