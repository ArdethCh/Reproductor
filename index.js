//lista de musicas
const list = [  
    {
        titulo : "blink 182  All The Small Things",
        file: "./musics/blink-182 - All The Small Things.mp3",
        cover: "./img/blink 182.jpg",
    },
    {
        titulo : "Imagine Dragons  Natural",
        file: "./musics/Imagine Dragons - Natural.mp3",
        cover: "./img/Imagine Dragons_cover.png",
    }
]

//capturar elementos del dom
const music = document.querySelector(".musics");
const audio = document.querySelector(".audio");
const tituloMusic = document.querySelector(".title");
const cover = document.querySelector(".cover");
const play = document.querySelector(".play");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const playText = document.querySelector(".fas2");
const currentProgresBar = document.querySelector(".progress");
const setProgressBar = document.querySelector(".progress_container");

//cargar y mostrar el listado de canciones
function loadMusic() {
    list.forEach((musics, index)=> {
        //crear li
        const li = document.createElement("li");
        //crear a
        const link = document.createElement("a");
        //hidratar
        link.textContent = musics.titulo;
        link.href = "#";
        //evento click
        link.addEventListener("click", () => {select(index)});
        //añadir a li
        li.appendChild(link);
        //añadir li a ul
        music.appendChild(li);
    })
}

//Barra de progreso
function updateProgress(event) {
    //total y el igual
    // console.log(event);
    const {duration, currentTime} = event.srcElement;
    // console.log("duration ", duration, "tiempo ", currentTime)
    const porcent = (currentTime / duration) * 100;
        // console.log(porcent, " %");
    currentProgresBar.style.width = porcent + "%";
    // console.log(currentProgresBar.style.width);
}

//Barra de progreso clicable
function setProgres(event) {
    const totalWidth = this.offsetWidth;
    const progressWidth = event.offsetX;
    const current = (progressWidth / totalWidth) * audio.duration;
    audio.currentTime = current;
    // console.log(percent);

    
}


//cargar cancion seleccionada
let actualMusic = null;

function select(listIndex) {
    if (listIndex !== actualMusic) { 
    changeActiveClass(actualMusic, listIndex);
    actualMusic = listIndex;
    tituloMusic.textContent = list[listIndex].titulo;
    audio.src = list[listIndex].file;
    cover.src = list[listIndex].cover;
    audio.play(); 
    }
}

setProgressBar.addEventListener("click", setProgres)
//Evento del progreso del audio
audio.addEventListener("timeupdate", updateProgress)
//button play
play.addEventListener("click", playButton);

// button prev
prev.addEventListener("click", ()=> {
    if (actualMusic !== null && actualMusic != 0) {
        actualMusic--;
        tituloMusic.textContent = list[actualMusic].titulo;
        audio.src = list[actualMusic].file;
        cover.src = list[actualMusic].cover;
        audio.play()
        }
})

//button next
next.addEventListener("click", ()=> {
    if (actualMusic !== null && actualMusic != 1) {
        actualMusic++;
        tituloMusic.textContent = list[actualMusic].titulo;
        audio.src = list[actualMusic].file;
        cover.src = list[actualMusic].cover;
        audio.play()
        }
})

//actualizar controles
function playButton() {
    if (audio.paused){
        playText.textContent = "Stop";
        audio.play();
    } else {
        playText.textContent = "Play";
        audio.pause();   
    } 
}

//Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a");

    if (lastIndex !== null){
       links[lastIndex].classList.remove("active");
    }
    links[newIndex].classList.add("active");
}
//lanzar siguiente music cuando termina la actual
audio.addEventListener("ended", ()=> {
    if (actualMusic !== null && actualMusic != 1) {
        actualMusic++;
        tituloMusic.textContent = list[actualMusic].titulo;
        audio.src = list[actualMusic].file;
        cover.src = list[actualMusic].cover;
        audio.play()
        }
})

//Go
loadMusic()







//https://www.youtube.com/watch?v=smyWFCJ_Kb8&list=WL&index=17&t=2604s
//57:31