const express = require('express');
const router = express.Router();
const usaRota = require('./user');

router.get('/', (req, res) => {
  const user = usaRota.userData();
  if (!user || Object.keys(user).length === 0) {
    return res.status(404).json({ erro: 'Nenhum usuário cadastrado.' });
  }

  const users = Array.isArray(user) ? user : [user];
  const nome = String(req.query.nome || '').trim().toLowerCase();
  if (!nome) {
    return res.json(users);
  }

  const filtered = users.filter(u => {
    const userName = String(u.nome || '').trim().toLowerCase();
    return userName === nome;
  });

  if (filtered.length > 0) {
    return res.json(filtered);
  }

  return res.status(404).json({ erro: 'Usuário não encontrado.' });
});

module.exports = router;
