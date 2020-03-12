
function MediaPlayer(config) {
    this.media = config.el;

}


MediaPlayer.prototype.play = function () {
    this.media.play();
}


MediaPlayer.prototype.pause = function() {
    this.media.pause();
}


MediaPlayer.prototype.isPlaying = function () {
    if (this.media.paused) {
        return true;
    } else {
        return false;
    }
}

export default MediaPlayer;