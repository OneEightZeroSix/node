var express = require('express');
var app = express();
app.post('/test',function(req,res){
    console.log(req);
    
})