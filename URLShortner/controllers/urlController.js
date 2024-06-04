const URL = require('../models/urlModel');
const shortid = require('shortid');

async function createShortUrl(req, res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({
            status: 'failed',
            message: 'Please provide a url'
        })
    }
    const shortID = shortid();
    console.log(shortID);
    await URL.create({
        shortid: shortID,
        redirectId: req.body.url,
        visitedHistory: []
    })

    return res.json({
        status: 'success',
        id: shortID,
    })
}

module.exports = {
    createShortUrl
}