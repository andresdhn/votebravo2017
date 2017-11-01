
// --------------------------------------------------------------
// Video 
// --------------------------------------------------------------

var heroVideo = document.querySelectorAll('.hero__video')[0]; 
var heroContent =  document.querySelectorAll('.hero__content')[0]; 

heroVideo.addEventListener('ended', function () { 
	this.classList.add('hidden');
	heroContent.classList.remove('hidden');
});
