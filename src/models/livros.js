let proximoId = 1;

const model = (body, id=proximoId++) => {
    if(body.titulo != undefined &&
       body.titulo != "" &&
       body.autor != undefined &&
       body.autor != "" &&
       body.ano != undefined &&
       body.ano != "" &&
       Number(body.ano) < 2025 &&
       body.genero != undefined &&
       body.genero != "" 
    ){
        return {
            id: id,
            titulo: body.titulo,
            autor : body.autor,
            genero : body.genero,
            ano : Number(body.ano)
        }
    }
}

module.exports = model;