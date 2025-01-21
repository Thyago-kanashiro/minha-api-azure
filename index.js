const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Rota inicial
app.get('/', (req, res) => {
  res.send('API rodando na Azure!');
});

// Rota de exemplo
app.get('/api/mensagem', (req, res) => {
  res.json({ mensagem: 'Olá, mundo!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});