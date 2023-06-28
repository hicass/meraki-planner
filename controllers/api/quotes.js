const Quote = require('../../models/quote');

module.exports = {
    getOne
}

async function getOne(req, res) {
    const allQuotes = await Quote.find({})
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    res.json(allQuotes[randomIndex])
}