import { ListMusics } from "./class.js";
// import { list, listMount } from "./musicList.js";



export const autor = document.querySelector(".autor");
export const tema = document.querySelector(".tema_music");
export const image = document.querySelector(".cover");
export const audio = document.querySelector(".audio");
export const music = document.querySelector(".lista");
export const playButton = document.querySelector(".play")
export const nextButton = document.querySelector(".next")
// const imagine = "Imagine Dragons  Natural";




const mp4 = new ListMusics();


// mp4.loadMusic(htmlLi, htmlA, musics)

// listMount()
playButton.addEventListener("click", mp4.playMusic)
nextButton.addEventListener("click", mp4.nextMusic)
mp4.loadMusic()
// mp4.select()


