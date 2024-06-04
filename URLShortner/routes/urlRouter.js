const express = require('express');
const { createShortUrl } = require('../controllers/urlController');
const URL = require('../models/urlModel');

const router = express.Router();

router.route('/').post(createShortUrl)

router.route('/:shortid').get( async(req,res) =>{
    const shortId = req.params.shortid;
    const entry = await URL.findOneAndUpdate(
        {shortid: shortId}, 
        {$push: {visitedHistory: {timeStamp: Date.now()}}})
    res.redirect(entry.redirectId)
})

module.exports = router;