
// --------------------------------------------------------------
// Hero listener
// --------------------------------------------------------------

var heroVideo = document.querySelectorAll('.hero__video')[0]; 
var heroContent = document.querySelectorAll('.hero__content')[0]; 
var scrollTo = require('./animatedScrollTo'); 

heroVideo.addEventListener('ended', function () { 
	this.classList.add('hidden');
	heroContent.classList.remove('hidden');
});

heroVideo.addEventListener('play', function () {
	scrollTo(document.body, 0, 1250)
	scrollTo(document.documentElement, 0, 1250)
}, false);