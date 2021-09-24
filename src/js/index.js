import MediaPlayer from './MediaPlayer.js';
import AutoPlay from '../plugins/Autoplay.js';


const video = document.querySelector("video");
const play = document.getElementById("playPause");
const mute = document.getElementById("muteUnmute");
const player = new MediaPlayer({ el: video, plugins: [
    new AutoPlay()
] });

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();