require('dotenv').config();
const apiKey = process.env.API_KEY

function checkApiKey(req, res, next){
    const apiKeyHeader = req.headers['x-api-key'];

    if (apiKeyHeader !== apiKey){
        return res.status(403).json({ auth: 'Acesso negado', info: 'Você não tem permissão para acessar esta API', status: '403'});
    }
    next();
}

module.exports = checkApiKey;