

window.addEventListener("load", function(event) {
	
	var videos = document.getElementsByTagName("video");
	var btnsPlay = document.getElementsByClassName("btnPlay");
	var btnsPause = document.getElementsByClassName("btnPause");
	var btnsStop = document.getElementsByClassName("btnStop");
	
for( var i = 0; i < videos.length; i++ ) {
        btnsPlay[i].addEventListener('click', playListner.bind( null, i) );
        btnsPause[i].addEventListener('click', pauseListner.bind( null, i) );
        btnsStop[i].addEventListener('click', stopListner.bind( null, i) );
}


function playListner(index) {
         videos[index].play();
}

function pauseListner(index) {
         videos[index].pause();
}

function stopListner(index) {
         videos[index].currentTime = 0;
         videos[index].pause();
}

 
// eine andere Möglichkeit ist statt var i = 0, let i = 0 zu benutzen

		// for (let i = 0; i < videos.length; i++) 
		// {
		// 	var video = videos[i];
		// 	var btnPlay = btnsPlay[i];
		// 	// … find button objects and add listener …
		// 	btnPlay.addEventListener("click", function (event) {
		// 	videos[i].play();

		// }); 
	 //    }
});