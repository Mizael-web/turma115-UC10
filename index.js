
const express = require('express');
const { sequelize } = require('./src/config/configDB');
require('dotenv').config();
const livroRoutes = require('./src/routes/livroRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/livros', livroRoutes);

sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Aplicação rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao sincronizar banco:', err);
  });

module.exports = app;
