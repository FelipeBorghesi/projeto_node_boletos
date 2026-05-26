function parseValor(value) {
  if (value === undefined || value === null || value === '') {
    return 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  const raw = String(value).trim();
  const onlyDigits = /^\d+$/.test(raw);

  if (onlyDigits) {
    return Number(raw) / 100;
  }

  const numeric = raw
    .replace(/\s/g, '')
    .replace(/R\$/g, '')
    .replace(/\./g, '')
    .replace(/,/g, '.');

  const parsed = Number(numeric);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function formatBRL(value) {
  const amount = parseValor(value);
  return amount.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });
}

const bankLogos = {
  'SANTANDER': 'bank-icons/santander.svg',
  'BRADESCO': 'bank-icons/bradesco.svg',
  'NUBANK': 'bank-icons/nubank.svg',
  'ITAÚ': 'bank-icons/itau.svg',
  'BANCO DO BRASIL': 'bank-icons/bb.svg',
  'SISPRIME': 'bank-icons/sisprime.svg',
  'SICREDI': 'bank-icons/sicredi.svg'
};

function renderBankLabel(bank) {
  const logo = bankLogos[bank] || 'bank-icons/default.svg';
  return `
    <span class="bank-with-logo">
      <img src="${logo}" alt="${bank || 'Banco'}" />
      <span>${bank || '-'}</span>
    </span>
  `;
}

function renderBoleto(data) {
  if (!data || Object.keys(data).length === 0) {
    return '<p>Nenhum boleto registrado.</p>';
  }

  return `
    <h3>Dados do Boleto</h3>
    <p><strong>Sacado:</strong> ${data.sacado || '-'}</p>
    <p><strong>Endereço:</strong> ${data.endereco || '-'}</p>
    <p><strong>Valor:</strong> ${data.valor !== undefined && data.valor !== null ? formatBRL(data.valor) : '-'}</p>
    <p><strong>Banco:</strong> ${renderBankLabel(data.banco)}</p>
    <p><strong>Documento:</strong> ${data.documento || '-'}</p>
  `;
}

function Consultar() {
  const resp = document.getElementById('respConsulta');
  resp.className = 'result';
  resp.innerHTML = '<p>Carregando...</p>';

  fetch('http://localhost:3000/dadosBoleto')
    .then(async r => {
      const data = await r.json();
      if (!r.ok) throw data;
      return data;
    })
    .then(d => {
      resp.innerHTML = renderBoleto(d);
    })
    .catch(e => {
      resp.className = 'result erro';
      resp.innerText = e.erro || 'Erro ao buscar boleto.';
    });
}

document.getElementById('consultar').addEventListener('click', Consultar);