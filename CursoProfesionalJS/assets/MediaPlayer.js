
function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach(plugin => {
        plugin.run(this);
    })
}


MediaPlayer.prototype.play = function () {
    this.media.play();
}


MediaPlayer.prototype.pause = function () {
    this.media.pause();
}


MediaPlayer.prototype.isPlaying = function () {
    if (this.media.paused) {
        return true;
    } else {
        return false;
    }
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.sound = function() {
    this.media.muted = !this.media.muted;
}

export default MediaPlayer;