
const express = require('express');
const app = express();
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const dotenv = require('dotenv');


dotenv.config();


app.use(express.json());
app.use('/usuarios', usuarioRoutes);

// Só inicia o servidor se não estiver em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = app;
