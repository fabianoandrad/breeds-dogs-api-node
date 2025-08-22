const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT;

const checkApiKey = require('./middlewares/auths')
const dataApi = require('./data/breeds-dogs.json');

app.get('/api/breeds-dogs', checkApiKey, (req, res) => {
    res.json(dataApi);
    
});

app.get('/api/breed/:id', checkApiKey, (req, res) => {
    const id = parseInt(req.params.id);
    const breed = dataApi.find(b => b.id == id);

    if(breed){
        return res.json(breed);
    }else{
        return res.status(404).json({notFound: 'Dados deste cão não encontrada!'})
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
