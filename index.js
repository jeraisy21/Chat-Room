var app = require('express')();							/*GLOBAL VARIABLES*/
var http = require('http').Server(app);						
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res){                    /* http requesting index html*/
	res.sendFile(__dirname + '/index.html');
});
	

io.on('connection', function(socket){
	console.log('A User is connected')				/* Socket.io connection */
	socket.on('chat message', function(msg){
		io.emit('chat message', msg);
	});
});


http.listen(3000, function(){						/* Port requested for the server */
	console.log('Listening to *:3000');
});