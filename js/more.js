function openImg(imgs) {
	var expandImg = document.getElementById("expandedImg");
	var imgText = document.getElementById("imgtext");
	expandImg.src = imgs.src;
	//imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
}
function openImg2(imgs) {
	var expandImg = document.getElementById("expandedImg2");
	var imgText = document.getElementById("imgtext");
	expandImg.src = imgs.src;
	//imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
}
function openImg3(imgs) {
	var expandImg = document.getElementById("expandedImg3");
	var imgText = document.getElementById("imgtext");
	expandImg.src = imgs.src;
	//imgText.innerHTML = imgs.alt;
	expandImg.parentElement.style.display = "block";
}
$(document).ready( function(){
	$('.gif').gifplayer();
});
