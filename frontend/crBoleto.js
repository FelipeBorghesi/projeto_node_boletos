function crBoleto () {
  const bankLogos = {
    'SANTANDER': 'bank-icons/santander.svg',
    'BRADESCO': 'bank-icons/bradesco.svg',
    'NUBANK': 'bank-icons/nubank.svg',
    'ITAÚ': 'bank-icons/itau.svg',
    'BANCO DO BRASIL': 'bank-icons/bb.svg',
    'SISPRIME': 'bank-icons/sisprime.svg',
    'SICREDI': 'bank-icons/sicredi.svg'
  };

  const banco = document.getElementById('banco');
  const bankLogo = document.getElementById('bankLogo');

  banco.addEventListener('change', () => {
    const logo = bankLogos[banco.value] || 'bank-icons/default.svg';
    bankLogo.src = logo;
    bankLogo.alt = banco.value ? `${banco.value} logo` : 'Logo do banco';
  });

  document.getElementById('enviar').addEventListener('click', () => {
    fetch('http://localhost:3000/boleto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sacado: document.getElementById('sacado').value,
        endereco: document.getElementById('endereco').value,
        valor: document.getElementById('valor').value,
        banco: banco.value,
        documento: document.getElementById('documento').value
      })
    })
    .then(r => r.json())
    .then(d => document.getElementById('respBoleto').innerText = JSON.stringify(d, null, 2))
    .catch(e => document.getElementById('respBoleto').innerText = String(e));
  });
}

crBoleto();      