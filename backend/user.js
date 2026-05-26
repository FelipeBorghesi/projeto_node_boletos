const express = require('express');
const router = express.Router();

let JInformacoes = {};


router.post('/', (req, res) => {
  const {nome, idade, email} = req.body
  if (!nome) {
    return res.status(400).json({
        erro: 'Nome não preenchido, é obrigatório.'
    })
  }
  else if (!idade) {
    return res.status(400).json({
        erro: 'Idade não preenchida, é obrigatório.'
    })
  }
  else if(!email){
    return res.status(400).json({
        erro: "Email não preenchido, é obrigatorio"
    })
  }
  else if (!/^[^@]+@[^@]+$/.test(email)) {
    return res.status(400).json({
      erro: 'Email inválido. Deve ser um endereço de email válido.'
    })
  }
  
  JInformacoes = {nome, idade, email};
  res.status(200).json({
    mensagem: 'Dados recebidos com sucesso para validar, utilize a consulta de usuários para verificar os dados.'
  })

});

module.exports = router;
module.exports.userData = () => JInformacoes;