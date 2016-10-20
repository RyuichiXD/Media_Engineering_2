 

 function videoInit() {

 
  //          alert('ok');
        }
 

 window.onload = videoInit;


window.addEventListener("load", function(event) {
	var videos = document.getElementsByTagName("video");
	var btnsPlay = document.getElementsByClassName("btnPlay");
	var btnsPause = document.getElementsByClassName("btnPause");
	var btnsStop = document.getElementsByClassName("btnStop");
	
		for (var i = 0; i < videos.length; i++) 
		{
			var video = videos[i];
			var btnPlay = btnsPlay[i];
			// … find button objects and add listener …
			btnPlay.addEventListener("click", function (event) {
				video.play();
			}); // …
	}
});