const express = require("express")
const router = express.Router()

const estudantes = require("../controllers/estudantes.js")



router.post("/",  (req, res) => {
    const body = req.body;
    const code = estudantes.store(body);
    res.status(code).json();
});

router.get("/", (req, res) => {
    const code = estudantes.index();
    res.json(code);
})

router.get("/:id", (req, res) => {
    const code = estudantes.show(req.params.id);
    res.json(code);
});

router.put("/:id", (req, res) => {
    const body = req.body;
    const code = estudantes.update(body, req.params.id);
    res.status(code).json();
})

router.delete("/:id", (req,res) => {
    estudantes.destroy(req.params.id);
    res.json();
})

module.exports = router;