export default function MediaPlayer(config) {
    this.media = config.el
    console.log('hola')
}

MediaPlayer.prototype.play = function () {
    this.media.play()
}
MediaPlayer.prototype.pause = function () {
    this.media.pause()
}
MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play()
    } else {
        this.pause()
    }
}