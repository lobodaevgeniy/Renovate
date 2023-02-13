const thumbUp = document.querySelectorAll('.thumb-up')
const thumbDown = document.querySelectorAll('.thumb-down')
for (let i = 0;i < thumbUp.length; i++) {
	thumbUp[i].onclick = function (){
		let UpSrc = thumbUp[i].getAttribute('src')
		let DownSrc = thumbDown[i].getAttribute('src')
		if(DownSrc === 'assets/icons/thumbdown_colored.png'){
			thumbDown[i].setAttribute('src','assets/icons/thumbdown_empty.png')
		}
		if(UpSrc === 'assets/icons/thumbup_empty.png'){
			thumbUp[i].setAttribute('src','assets/icons/thumbup_colored.png')
		}else if(UpSrc === 'assets/icons/thumbup_colored.png'){
			thumbUp[i].setAttribute('src','assets/icons/thumbup_empty.png')
		}
	}
	thumbDown[i].onclick = function (){
		let UpSrc = thumbUp[i].getAttribute('src')
		let DownSrc = thumbDown[i].getAttribute('src')
		if(UpSrc === 'assets/icons/thumbup_colored.png'){
			thumbUp[i].setAttribute('src','assets/icons/thumbup_empty.png')
		}
		if(DownSrc === 'assets/icons/thumbdown_empty.png'){
			thumbDown[i].setAttribute('src','assets/icons/thumbdown_colored.png')
		}else if(DownSrc === 'assets/icons/thumbdown_colored.png'){
			thumbDown[i].setAttribute('src','assets/icons/thumbdown_empty.png')
		}
	}		
	}