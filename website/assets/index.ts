import MediaPlayer from "@micaelajofre/mediaplayer"
import AutoPlay from "@micaelajofre/mediaplayer/lib/plugins/AutoPlay"
import AutoPause from "@micaelajofre/mediaplayer/lib/plugins/AutoPause"
import Ads from "@micaelajofre/mediaplayer/lib/plugins/Ads"

const video = document.querySelector('video')

const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] })

const playButton : HTMLElement | null  = document.querySelector('#play-pause') 
const unmute : HTMLElement | null = document.querySelector('#unmute')  


playButton?.addEventListener('click', () => player.togglePlay())
unmute?.addEventListener('click', () => player.toggleMute())

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}