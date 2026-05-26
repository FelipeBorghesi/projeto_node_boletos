const express = require('express');
const router = express.Router();

let boleto = {};

router.post('/', (req, res) => {
 const {sacado, endereco, valor, banco, documento} = req.body;
 if (!sacado || !endereco || !valor || !banco || !documento){
    res.status(400).json({
        erro: 'Há parametros faltando, dúvidas consultar o Swagger dessa rota'
    })
 }

  else {boleto = {sacado, endereco, valor, banco, documento};
  res.status(200).json({
    mensagem: 'Boleto registrado com sucesso!'
  })
  }
})


module.exports = {
    router,
    dadosBoleto: () => boleto
}