import express from 'express';

import connection from './database/database.js';

const app = express();
app.use(express.json());

app.get('/allocations', async (req, res) => {
  try {
    // busque o histórico de hospedagens, junto das informações do cliente e do quarto

    // depois de implementar, remova esta linha
    res.sendStatus(501);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(4000, () => {
  console.log('Server is listening on port 4000.');
});