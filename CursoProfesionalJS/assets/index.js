const video = document.querySelector("video");
const button = document.querySelector("button");
import MediaPlayer from './MediaPlayer.js';

const player = new MediaPlayer({ el: video });


button.onclick = () => {
    if(player.isPlaying()){
        player.play();
    } else {
        player.pause();
    }
    
}
