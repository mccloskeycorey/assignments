var myList = document.getElementsByTagName("li");

for (var i = 0; i < myList.length; i++) {
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	// myList[i].appendChild(span);
	myList[i].insertBefore(span, myList[i].firstChild);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	}
}


// Create a new list item when clicking on the "Add" button
function newLi() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var text = document.createTextNode(inputValue);
	li.appendChild(text);
	document.getElementById("myUL").appendChild(li);
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	// ask marcus about this still don't get it.
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}
