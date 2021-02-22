
function reposition_button(){
	var wraps = document.getElementsByClassName("rs-parallax-wrap"); 
	var target = wraps.item(10);

	if (window.innerWidth < 768){
		target.classList.add('center-button');
		console.log('added');
	}else{
		console.log('removed');
		target.classList.remove('center-button');
	}
}
window.onload = function () { 
	reposition_button()
}

window.onresize = function(event) {
	reposition_button()



	// location.reload();

};