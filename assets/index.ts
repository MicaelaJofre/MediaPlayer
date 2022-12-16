import MediaPlayer from "./MediaPlayer"
import AutoPlay from "../plugins/AutoPlay"
import AutoPause from "../plugins/AutoPause"

const video = document.querySelector('video')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] })

const playButton : HTMLElement | null  = document.querySelector('#play-pause') 
const unmute : HTMLElement | null = document.querySelector('#unmute')  


playButton?.addEventListener('click', () => player.togglePlay())
unmute?.addEventListener('click', () => player.toggleMute())

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}