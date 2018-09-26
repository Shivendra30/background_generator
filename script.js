// var _ = require('lodash');
// console.log(_);

var body = document.querySelector("body");
var colorInput1 = document.querySelectorAll("input[type=color]")[0];
var colorInput2 = document.querySelectorAll("input[type=color]")[1];
var h3 = document.querySelector("h3");


var codeString = "linear-gradient(to right, " + colorInput1.value+ ", " + colorInput2.value + ")";
h3.appendChild(document.createTextNode(codeString));
body.style.backgroundImage = codeString;

// body.style.backgroundImage = "linear-gradient(to right, red , yellow)";

colorInput1.addEventListener("input", changeColor);
colorInput2.addEventListener("input", changeColor);


function changeColor(e) {

	console.log(colorInput1.value);
	console.log(colorInput2.value);

	codeString = "linear-gradient(to right, " 
				+ colorInput1.value 
				+ ", " 
				+ colorInput2.value 
				+ ")";

	// h3.appendChild(document.createTextNode(codeString));
	h3.innerHTML = codeString;

	body.style.backgroundImage = codeString;
}



