
import { autor, image, music, audio, playButton } from "./main.js";
var actualMusic = null;

export class ListMusics {
  constructor() {
        
    // this.titulo = titulo;
    // this.file = file;
    // this.cover = cover;
    this.list = [  
      {
          titulo: "blink 182  All The Small Things",
          file: "./music/blink-182 - All The Small Things.mp3",
          cover: "./img/blink 182.jpg"
      },
      {
          titulo: "Imagine Dragons  Natural",
          file: "./music/Imagine Dragons - Natural.mp3",
          cover: "./img/Imagine Dragons_cover.png"
      }
  ]
 
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
   
    console.log(this.list);
    if (audio.paused) {
      playButton.textContent = "Pause";
      audio.play()

    } else {
      playButton.textContent ="Play";
      audio.pause()
    }
  }





  nextMusic() {
console.log(actualMusic)
    if (this.actualMusic !== null) {
        
        actualMusic++;
        console.log(actualMusic);
        console.log("Next");
        autor.textContent = this.list[actualMusic].titulo;
        image.src = this.list[actualMusic].cover;   
        audio.src = this.list[actualMusic].file;
        
        audio.play()
    }

  }



}


