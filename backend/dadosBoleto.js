const express = require('express');
const router = express.Router();
const UsaRota = require('./boleto');

router.get('/', (req, res) => {
    res.json(UsaRota.dadosBoleto())
})

module.exports = router;