# projetoNode

Projeto Node.js com backend em Express e frontend estático para cadastro de usuários e registro/consulta de boletos.

## Descrição

Este projeto implementa uma API simples em Node.js que recebe dados de usuário e boletos via JSON, valida os dados e disponibiliza consultas. O frontend inclui páginas HTML/JavaScript para:

- criar usuários
- registrar boletos
- consultar o boleto registrado

## Tecnologias

- Node.js
- Express
- CORS
- Nodemon (desenvolvimento)
- HTML, CSS, JavaScript no frontend

## Estrutura

- `server.js` - servidor Express principal
- `package.json` - dependências e scripts
- `backend/`
  - `user.js` - rota de cadastro e leitura de usuário
  - `dados.js` - rota de consulta de usuário
  - `boleto.js` - rota de criação de boleto
  - `dadosBoleto.js` - rota de consulta de boleto
- `frontend/`
  - `index.html` - página principal do sistema
  - `criarUsuario.html` - formulário para criar usuário
  - `usuario.html` - consulta de usuário
  - `consulta.html` - consulta de boleto
  - `crUsuario.js` - lógica de criação de usuário
  - `crBoleto.js` - lógica de criação de boleto
  - `consulta.js` - lógica de consulta de boleto
  - `style.css` - estilos visuais
  - `bank-icons/` - ícones de banco

## Instalação

```bash
cd (onde_voce_baixou_seu_projeto)
npm install
```

## Uso

1. Inicie o servidor:

```bash
node server.js
```

2. Abra o frontend em um navegador usando os arquivos em `frontend/`.
   - Exemplo: abrir `frontend/index.html`

3. Use as páginas para criar usuários, registrar boletos e consultar boletos.

## Endpoints

### POST `/user`

Registra um usuário. JSON esperado:

```json
{
  "nome": "Nome",
  "idade": "30",
  "email": "email@exemplo.com"
}
```

### GET `/dados`

Retorna o usuário cadastrado.
- Se `nome` for fornecido como query, filtra pelo nome.

Exemplo:

```text
GET /dados?nome=Felipe
```

### POST `/boleto`

Registra um boleto. JSON esperado:

```json
{
  "sacado": "Nome do sacado",
  "endereco": "Endereço",
  "valor": "1000",
  "banco": "NUBANK",
  "documento": "12345678900"
}
```

### GET `/dadosBoleto`

Retorna os dados do boleto registrado.

## Observações

- O projeto não usa banco de dados: os dados ficam em memória até reiniciar o servidor.
- O frontend consome as rotas em `http://localhost:3000`
- Para desenvolvimento, o `nodemon` pode ser instalado globalmente e usado para reiniciar o servidor automaticamente.
