const express = require('express');
const app = express();
const PORT = 3000;

const dataApi = require('./breeds-dogs.json');

app.get('/api/breeds-dogs', (req, res) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.API_KEY){
        return res.status(403).json({ erro: 'Acesso negado'});
    }
    res.json(dataApi);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});