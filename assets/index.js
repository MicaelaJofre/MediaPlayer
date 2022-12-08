import MediaPlayer from "./MediaPlayer.js"

const video = document.querySelector('video')
const button = document.querySelector('button')

const player = new MediaPlayer({ el: video })

button.onclick = () => {
    console.log('hola2')
    player.togglePlay()
}