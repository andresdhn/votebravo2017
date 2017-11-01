
// --------------------------------------------------------------
// Modal 
// --------------------------------------------------------------

var voteBtn = document.getElementsByClassName('voteBtn'); 
var modal = document.getElementsByClassName('modal')[0]; 
var closeModal = document.getElementsByClassName('modal__close')[0];

for (var i=0; i<voteBtn.length; i++){
	voteBtn[i].addEventListener('click', showModal ); 
}

closeModal.addEventListener('click', hideModal); 

function showModal() {
	modal.classList.add('in'); 
}

function hideModal() {
	modal.classList.remove('in'); 
}
