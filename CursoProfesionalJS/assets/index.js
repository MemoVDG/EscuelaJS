const video = document.querySelector("video");
const button = document.querySelector("button");
const muteVideo = document.getElementById('mute');
import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const player = new MediaPlayer({ el: video, plugins: [
        new AutoPlay(),
        new AutoPause()
    ] 
});


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
