var express = require('express');
var router = express.Router();
var quotes = require('../quotes');


router.get('/quote(/:num)?', function(req, res, next) {
    quotes.getQuoteFromDB(function(err, quote) {
        if (err) throw Error("Couldn't get quote");
        res.json(quote);
    },req.params.num);
});



router.get('/quotes', function(req, res, next) {
    quotes.getQuotesFromDB(function(err, quotes) {
        if (err) throw Error("Couldn't get quotes");
        res.json(quotes);
    });
});

module.exports = router;