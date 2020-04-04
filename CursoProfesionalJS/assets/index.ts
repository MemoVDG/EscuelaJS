const video = document.querySelector("video");
const button: HTMLElement = document.querySelector("button");
const muteVideo: HTMLElement = document.getElementById('mute');
import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const player = new MediaPlayer({
    el: video, plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
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
if ('serviceWorker' in navigator) {
    // Registramos el archivo donde se encuentra el service worker
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}
