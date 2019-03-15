var enter = document.getElementById("enter");
var userInput = document.getElementById("userInput");
var list = document.querySelector("ul");
var container = document.querySelector("div");

console.log(container);

enter.addEventListener("click", addAfterClick);

userInput.addEventListener("keypress", addAfterKeypress);

container.addEventListener("contextmenu", function() {
		stopEvent(event);
});


list.addEventListener("click", function() {
	var target=event.target;
	target.classList.toggle("strike");
})

list.addEventListener("contextmenu", function() {
	var target = event.target;
	list.removeChild(target);
	stopEvent(event);
});

function stopEvent(event){
 if(event.preventDefault != undefined)
  event.preventDefault();
 if(event.stopPropagation != undefined)
  event.stopPropagation();
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(userInput.value));
	list.appendChild(li);
	userInput.value = "";
}

function checkInputValue() {
	return userInput.value <= 3;
}

function checkKeypressed(event) {
	return event.which !== 13;
}


function addAfterClick() {
	if(checkInputValue()) {
		return;
	}else {
		createListElement();
	}
	
}

function addAfterKeypress(event) {
	if(checkKeypressed(event) || checkInputValue()) {
		return;
	}

	createListElement();
	
}