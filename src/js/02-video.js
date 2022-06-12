import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const setLocalTime = throttle(function(data) {
	if(data.seconds < 1) {
		localStorage.setItem("videoplayer-current-time", 0)
	} else {
		localStorage.setItem("videoplayer-current-time", data.seconds)}}, 1000);

player.on('timeupdate', setLocalTime)

if(localStorage.getItem('videoplayer-current-time')) {
	player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

