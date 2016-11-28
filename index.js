var app = require('express')();  
var http = require('http').Server(app);

app.get('/', function(req, res){  
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){  
  console.log('um usuario conectou');
});

http.listen(3000, function(){  
  console.log('servidor rodando em localhost:3000');
});
