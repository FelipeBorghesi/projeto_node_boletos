const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const user = require('./backend/user');
const dados = require('./backend/dados');
const boleto = require('./backend/boleto');
const dadosboleto = require('./backend/dadosBoleto');

app.use('/user', user);
app.use('/dados', dados);
app.use('/boleto', boleto.router);
app.use('/dadosBoleto', dadosboleto);

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
