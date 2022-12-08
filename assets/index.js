import MediaPlayer from "./MediaPlayer.js"
import AutoPlay from "../plugins/AutoPlay.js"

const video = document.querySelector('video')
const button = document.querySelector('#play-pause')
const unmute = document.querySelector('#unmute')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay()] })

button.onclick = () => player.togglePlay()
unmute.onclick = () => player.toggleMute()