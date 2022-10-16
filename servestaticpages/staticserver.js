var express = require('express');
var serverStatic = require('server-static');
var app=express()
.use(serverStatic(__dirname+'/public'))
.listen(3000);
//var app=express()
//.use(express.static(__dirname+'/public'))
//.listen(3000);