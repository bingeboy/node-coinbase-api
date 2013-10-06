//npms
//var log = require ('debug')('Coinbase'); //not in use
var util= require('util');
var OAuth = require('oauth').OAuth;
var request = require('request');

//global var
var url;
//constructor
function CoinBase (options) {
//    if (!options) console.log('No O!options.apiKeyy) console.log("No API KEY");
    //add check for OAuth2 once added.
    this.apiKey =  options.apiKey;
    this.baseUrl = options.baseUrl;
}

CoinBase.prototype.balance = function() {
    url = this.baseUrl + '/account/balance?api_key=' + this.apiKey;
    request.get(url, function( err, res, body ) {
        if (err) throw new error("error on request");
        else if(res.statusCode === 200) {
            console.log(body);
            return body;
        }
    });
};

CoinBase.prototype.buyPrice = function(amount) {
    url = this.baseUrl + '/prices/buy?qty=' + amount;
    console.log(url);
    request.get(url, function( err, res, body ) {
        if (err) throw new error("error on request");
        else if(res.statusCode === 200) {
            console.log(body);
            return body;
        }
    });
};

CoinBase.prototype.sellPrice = function(amount) {
    url = this.baseUrl + '/prices/sell?qty=' + amount;
    console.log(url);
    request.get(url, function( err, res, body ) {
        if (err) throw new error("error on request");
        else if(res.statusCode === 200) {
            console.log(body);
            return body;
        }
    });
};

//temp obj
var options = {
    baseUrl : 'https://coinbase.com/api/v1',
    apiKey : process.env.COINBASE_API_KEY
};

var temp = new CoinBase(options);
temp.sellPrice(2);
