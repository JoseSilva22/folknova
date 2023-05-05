let colors = ["#f04f41", "#4444da", "#69c49e"];

document.addEventListener("DOMContentLoaded", function(e) {


    let randColor = colors[Math.floor(Math.random() * colors.length)];

    document.getElementById("menu").style.backgroundColor = randColor;
    let artists = document.querySelectorAll('.titulo');
    let bLinks = document.querySelectorAll('.bilheteLink');

    artists.forEach(artists => {
        artists.style.color = randColor;
    });

    bLinks.forEach(bLinks => {
        bLinks.style.border = "5px solid" +randColor;
        bLinks.style.backgroundColor = randColor;
    });

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomOrder = function (element) {

        // Viewport Dimensions
        var vpWidth = window.innerWidth;
        var vpHeight = window.innerHeight;

        // Image Position
        var xPos = getRandomInt(0, -element.offsetWidth/2);
        var yPos = getRandomInt(0, vpHeight - element.offsetHeight);
        var zIndex = getRandomInt(0, 13);

        //element.style.cssText += '--x-position:' + xPos + 'px; --y-position:' + yPos + 'px; z-index:' + zIndex;

        if(Math.random()<0.5)
            element.style.left = xPos + 'px';
        else
            element.style.right = xPos + 'px';

        element.style.top = yPos + 'px';
        element.style.zIndex = zIndex;
        //element.style.width = Math.random()*3 + "%";

    };

//Setup
    var imgs = document.querySelectorAll('.formX');

    imgs.forEach((the_img) => {

        window.addEventListener('load', function () {
            randomOrder(the_img);
        });

    });


	var bilhetes = document.getElementsByClassName("info");
	var bilhetesBotoes = document.getElementsByClassName("bilheteLink");

	for (let i = 0; i < bilhetes.length; i++) {
		bilhetes[i].addEventListener("click", function () {
			/* Toggle between adding and removing the "active" class,
			to highlight the button that controls the panel */
			this.classList.toggle("active");
			/* Toggle between hiding and showing the active panel */
			var body = this.nextElementSibling;
			if (body.style.display === "block") {
				body.style.display = "none";
				if (i<3) bilhetesBotoes[i].style.display = "none";
			} else {
				body.style.display = "block";
				if (i<3) bilhetesBotoes[i].style.display = "block";
			}
		});
	}


});

