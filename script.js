(function () {
	var menu = document.getElementById("menu").children;

	for (var i = 0; i < menu.length; i++) {
		menu[i].addEventListener("click",function () {
			var id = this.getAttribute("id");
			document.getElementsByClassName("visible")[0].className = "";
			document.getElementsByClassName("selected")[0].className = "";
			document.getElementById(id+"-box").className="visible";
			this.className = "selected";
		});
	}
})();
