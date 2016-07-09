// var socket = io.connect("http://192.168.51.15:5000");
var socket = io.connect("http://192.168.6.100:5000");
var obj = {
		title: "客户端B传来数据!",
		x: 0,
		y: 0,
		z: 0
	}
	// SendData();
//向另一个客户端发送数据
function SendData() {
	socket.emit("BToA", obj);
}
socket.on("SendDataToB", function(data) {
	console.log(data)
})
socket.on("disconnect", function() {
	alert("链接断开,请刷新页面!")
});

var btn = document.querySelector(".btn");
btn.onclick = function() {
	SendData();
}
window.addEventListener('deviceorientation', function(event) {
	var eX = event.alpha;
	var eY = event.beta;
	var eZ = event.gamma;
	obj.x = eX;
	obj.y = eY;
	obj.z = eZ;
	SendData();
}, true);