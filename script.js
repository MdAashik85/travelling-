var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var h1s = document.getElementsByClassName("h");
h1s[0].addEventListener("click", function() {
	page2.style.display = "none";
	page1.style.display = "block";
	});
h1s[1].addEventListener("click", function() {
	page1.style.display = "none";
	page2.style.display = "block";
	});
    