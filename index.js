const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;
const apiKey = process.env.API_KEY

const dataApi = require('./breeds-dogs.json');

app.get('/api/breeds-dogs', (req, res) => {
    const apiKeyHeader = req.headers['x-api-key'];
    if (apiKeyHeader !== apiKey){
        return res.status(403).json({ auth: 'Acesso negado', info: 'Você não tem permissão para acessar esta API', status: '403'});
    }
    res.json(dataApi);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
