import { autor, image, music, audio, playButton } from "./main.js";
import { list } from "./musicList.js";

var actualMusic = null;

export class ListMusics {
  constructor(lista) {

    this.list = lista

  }

  loadMusic() {

    this.list.forEach((cero, index) => {
      const htmlLi = document.createElement("li")
      const htmlA = document.createElement("a")
      htmlA.textContent = this.list[index].titulo;
      htmlA.href = "#";
      htmlLi.appendChild(htmlA)
      music.appendChild(htmlLi)
	    htmlA.addEventListener("click", ()=> {this.select(index)})
    })
  }

  select(index) {

	  if (index !== actualMusic) {
		  actualMusic = index;
		  autor.textContent = this.list[index].titulo;
		  image.src = this.list[index].cover;
		  audio.src = this.list[index].file;
		  audio.play();
	  }
  }
  
  playMusic() {

    if (audio.paused) {
      playButton.textContent = "Pause";
      audio.play()
    } else {
      playButton.textContent ="Play";
      audio.pause()
    }
  }
}

export function nextMusic() {
     
  if (actualMusic !== null && autor.textContent !== list[list.length -1].titulo) {
      actualMusic++;
      autor.textContent = list[actualMusic].titulo; 
      image.src = list[actualMusic].cover; 
      audio.src = list[actualMusic].file; 
      return audio.play()
  } 
    console.log("No hay mas musicas en lista");
}

export function prevMusic() {
  
  if (actualMusic !== null && autor.textContent !== list[0].titulo) {
    actualMusic--;
    autor.textContent = list[actualMusic].titulo; 
    image.src = list[actualMusic].cover; 
    audio.src = list[actualMusic].file; 
    return audio.play()
} 
  console.log("No hya musica anterior");
}

