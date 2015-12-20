var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var online = 0;
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    online ++;
    console.log(online + ' online');
});

http.listen(3000, function(){
    console.log('listing on 8:3000');
});
