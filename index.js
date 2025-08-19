const express = require('express');
const app = express();
const PORT = 3000;

const dataApi = require('./breeds-dogs.json');

app.get('/api-breeds-dogs', (req, res) => {
    res.json(dataApi);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});