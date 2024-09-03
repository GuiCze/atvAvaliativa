let proximoId = 1;
const livros = require("../controllers/livros.js");
const estudantes = require("../controllers/estudantes.js")

const model = (body, id=proximoId++) => {
    if(body.data_aluguel != undefined &&
       body.data_aluguel != "" &&
       estudantes.show(body.estudante_id) &&
       livros.show(body.livro_id) &&
       body.data_devolucao != undefined &&
       body.data_devolucao != "" 
    ){
        return {
            id: id,
            data_aluguel: body.data_aluguel,
            estudante_id: body.estudante_id,
            livro_id: body.livro_id,
            data_devolucao: body.data_devolucao,
            }
        }
    }

module.exports = model;