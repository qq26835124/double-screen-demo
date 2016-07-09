// var socket = io.connect("http://192.168.51.15:5000");
var socket = io.connect("http://192.168.6.100:5000");
socket.on("SendDataToA", function(data) {
	console.log(data);
	document.querySelector(".pc .title").innerHTML = data.title;
	document.querySelector(".pc .x").innerHTML = "x轴：" + data.x;
	document.querySelector(".pc .y").innerHTML = "y轴：" + data.y;
	document.querySelector(".pc .z").innerHTML = "z轴：" + data.z;
	document.querySelector('.circle1').style.marginLeft = data.x + "px";
	document.querySelector('.circle2').style.marginTop = data.y + "px";
	document.querySelector('.circle3').style.marginTop = data.z + "px";
});
SendData();
function SendData() {
	socket.emit("AtoB", "客户端A传来的数据!");
}
socket.on("disconnect", function() {
	alert("链接断开!")
});