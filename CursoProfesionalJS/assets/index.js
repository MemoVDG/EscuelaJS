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

/*  Los service workers nos van a permitir guardar informacion cuando el usuario se encuentra offline
*/
// Verificamos si el navegador soporta serviceworkers
if('serviceWorker' in navigator) {
    // Registramos el archivo donde se encuentra el service worker
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}
