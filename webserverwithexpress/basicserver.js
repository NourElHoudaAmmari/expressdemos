var express = require('express');
http = require('http');
//create an express application 
var app = express()
.use(function(req,res,next){
    res.end('hello express!');
});
//register with http
http.createServer(app).listen(3000);