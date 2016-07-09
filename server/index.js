var http = require("http"),
	io = require("socket.io");
var app = http.createServer(),
	io = io.listen(app);
app.listen(5000,function(){
	console.log('listening on *:5000');
});
io.sockets.on("connection", function(socket) {
	socket.on("BToA", function(data) {
		console.log(data); //服务端输出打印
		socket.broadcast.emit("SendDataToA", data);
	});
	socket.on("AToB", function(data) {
		console.log(data);
		socket.broadcast.emit("SendDataToB", data);
	});
});