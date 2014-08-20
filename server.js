var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var requestClient = require('request');
var token = require('./modules/token');

var app = express();
app.use(bodyParser.json());

// User Authentication
app.post('/user/login', function(req, res) {
	if ( req.body.email === 'chetan@test.com' && req.body.password === 'abc123'){
		res.send({"auth_token" : token.generate(), "result" : "success"});
	} else {
		res.send({"result" : "failed", "message" : "Authentication Failed"});
	}
});

// Find User
app.get('/user/:email', function(req, res) {
    res.send('getUser');
});

app.listen(3000, function() {
    console.log('Server Listening at Port : 3000');
})
