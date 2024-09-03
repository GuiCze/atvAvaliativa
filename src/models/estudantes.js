let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.nome != undefined &&
        body.nome != "" &&
        body.matricula != undefined &&
        body.matricula != "" &&
        body.curso != undefined &&
        body.curso != "" &&
        body.ano != undefined &&
        body.ano != "" &&
        Number(body.ano) < 2025
    ){
        return {
            id: id,
            nome: body.nome,
            curso: body.curso,
            matricula: body.matricula,
            ano: Number(body.ano)
        }
    }
}

module.exports = model;