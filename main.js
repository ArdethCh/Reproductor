import { ListMusics, nextMusic, prevMusic } from "./class.js";
import { list } from "./musicList.js";

export const autor = document.querySelector(".autor");
export const tema = document.querySelector(".tema_music");
export const image = document.querySelector(".cover");
export const audio = document.querySelector(".audio");
export const music = document.querySelector(".lista");
export const playButton = document.querySelector(".play")
export const nextButton = document.querySelector(".next")
export const prevButton = document.querySelector(".prev")

const mp4 = new ListMusics(list);

playButton.addEventListener("click", mp4.playMusic)
nextButton.addEventListener("click", nextMusic)
prevButton.addEventListener("click", prevMusic) 

mp4.loadMusic()





