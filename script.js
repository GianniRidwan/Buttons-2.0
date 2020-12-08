var count1 = 1;
var count2 = 1;
var count3 = 1;


var button1 = document.getElementById("button_1");
var button2 = document.getElementById("button_2");
var button3 = document.getElementById("button_3");


button1.addEventListener("click", function(){
	button_1.innerHTML = count1++;
	image.src = "images/1.jpg";
	document.getElementById("container").style.background = "url('images/bg1.jpg')";
	button_1.style.backgroundColor = "red";
	button_2.style.backgroundColor = "green";
	button_3.style.backgroundColor = "green";
	button_1.disabled = true;
	button_2.disabled = false;
	button_3.disabled = false;
});

button2.addEventListener("click", function(){
	button_2.innerHTML = count2++;
	image.src = "images/2.jpg";
	document.getElementById("container").style.background = "url('images/bg2.jpg')";
	button_1.style.backgroundColor = "green";
	button_2.style.backgroundColor = "red";
	button_3.style.backgroundColor = "green";
	button_1.disabled = false;
	button_2.disabled = true;
	button_3.disabled = false;
});

button3.addEventListener("click", function(){
	button_3.innerHTML = count3++;
	image.src = "images/3.jpg";
	document.getElementById("container").style.background = "url('images/bg3.jpg')";
	button_1.style.backgroundColor = "green";
	button_2.style.backgroundColor = "green";
	button_3.style.backgroundColor = "red";
	button_1.disabled = false;
	button_2.disabled = false;
	button_3.disabled = true;
});
