document.addEventListener("DOMContentLoaded", function(e) {
	
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var randomOrder = function (element) {

        // Viewport Dimensions
        var vpWidth = window.innerWidth;
        var vpHeight = window.innerHeight;

        // Image Position
        var xPos = getRandomInt(0, 100 - element.offsetWidth);
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
});