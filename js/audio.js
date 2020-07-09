var audio = new Audio('../audio/bensound-littleidea.mp3')
var play = false

function playAudio(){
	var button = document.querySelector('button#som')
	button.addEventListener('mouseup', function(){
		if(!play){
			play = true
			audio.currentTime = 0
			audio.play()
		}
		else{
			play = false
			audio.pause()
		}
	})
}
