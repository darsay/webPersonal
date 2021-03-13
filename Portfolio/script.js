window.onload = init;
var isLoaded = false;

function init() {
	var sprite = document.getElementById("yop");
	var fondo = document.getElementById("outer");
	var movimiento = document.getElementById("moveText");
	var lastScrollTop = 0;

	fondo.addEventListener('scroll', function (event) {
		console.log("Me muevo");
		sprite.style.backgroundImage = "url(assets/yop-andando.gif)";
	});

	var isScrolling;

	fondo.addEventListener('scroll', function (event) {

		window.clearTimeout(isScrolling);

		// Set a timeout to run after scrolling ends
		isScrolling = setTimeout(function () {

			sprite.style.backgroundImage = "url(assets/yopPixel.gif)";

		}, 66);

	}, false);

	if (navigator.userAgent.match(/Android/i)
		|| navigator.userAgent.match(/webOS/i)
		|| navigator.userAgent.match(/iPhone/i)
		|| navigator.userAgent.match(/iPad/i)
		|| navigator.userAgent.match(/iPod/i)
		|| navigator.userAgent.match(/BlackBerry/i)
		|| navigator.userAgent.match(/Windows Phone/i)) {
		movimiento.innerText = "Para moverte, arrastra de izquierda a derecha."
		document.getElementById("aboutText").style.fontSize = "5vw";
		document.getElementById("dos").style.width = "125vw";
		document.getElementById("tres").style.width = "125vw";
		document.getElementById("outer").style.overflowX = "scroll";
		document.getElementById("outer").style.overflowY = "auto";
		
		var textos = document.getElementsByClassName("aboutText");

		for (var i = 0; i < textos.length; i++) {
			textos[i].style.width = "80vw";
			textos[i].style.fontSize = "35pt"
		  }
	}

	
}





