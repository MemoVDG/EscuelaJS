const video = document.querySelector("video");
const button = document.querySelector("button");
const muteVideo = document.getElementById('mute');
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const player = new MediaPlayer({ el: video, plugins: [] });


button.onclick = () => {
    if (player.isPlaying()) {
        player.play();
    } else {
        player.pause();
    }
}

muteVideo.onclick = () => {
    player.sound();
}
