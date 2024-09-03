const express = require("express")
const livros_router = require("./router/livros.js");
const estudantes_router = require("./router/estudantes.js");
const alugueis_router = require("./router/alugueis.js");
const porta = 3000;
const app = express();

app.use(express.json());
app.use("/livro", livros_router);
app.use("/aluguel", alugueis_router)
app.use("/estudante", estudantes_router)




app.listen(porta, () => {
    console.log(`Server running in ${porta} port.`);
})