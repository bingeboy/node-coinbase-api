#Nodejs Client for Interacting Coinbase API

Currently only supports API Key based access.
Please note you are required to keep your API key out of the app... 

#API Calls Supported
* Balance
* Buy Price <- Not tested yet
* Sell Price
* Send BTC

###Install
```
npm install nodecoinbase

```

###Methods

```
Name.balance();
Name.buyPrice(amount);
Name.sellPrice(amount);
Name.sendBtc(email, amount, note);
```

###Video
(http://youtu.be/r7Z6m4IWs8w)



* TODO: Provide OAuth2 support with refresh token.
* TODO: Create exmaple of midddleware interacting with NPM
* TODO: Mocha Testing


Highly Alpha.
Use at your own risk.

Pull requests welcome!
