let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [{
        songName: "Warriyo - Mortals [NCS Release]",
        filePath: "songs/1.mp3",
        coverpath: "covers/1.jpg"
    },
    {
        songName: "Ishq",
        filePath: "songs/2.mp3",
        coverpath: "covers/2.jpg"
    },
    {
        songName: "Salam-Ishp",
        filePath: "songs/3.mp3",
        coverpath: "covers/3.jpg"
    },
    {
        songName: "Salam-",
        filePath: "songs/4.mp3",
        coverpath: "covers/4.jpg"
    },
    {
        songName: "Hello",
        filePath: "songs/5.mp3",
        coverpath: "covers/5.jpg"
    },
    {
        songName: "Bg",
        filePath: "songs/6.mp3",
        coverpath: "covers/6.jpg"
    },
    {
        songName: "Deba",
        filePath: "songs/7.mp3",
        coverpath: "covers/7.jpg"
    },
    {
        songName: "Kgf",
        filePath: "songs/7.mp3",
        coverpath: "covers/8.jpg"
    },
    {
        songName: "Aj",
        filePath: "songs/9.mp3",
        coverpath: "covers/9.jpg"
    },
    {
        songName: "Akm",
        filePath: "songs/10.mp3",
        coverpath: "covers/10.jpg"
    },
]
songItems.forEach((element, i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener("timeupdate", () => {
    // console.log("timeupdate");
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    // console.log("progress")
    myProgressBar.value = progress;
})
myProgressBar.addEventListener("change", () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener("click", (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText=songs[songIndex].song
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 12;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    })
})
document .getElementById("next").addEventListener("click",()=>{
    if ( songIndex>=9)
     {
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].song;
    audioElement.play();
    masterPlay.classList.remove("fa-Play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document .getElementById("previous").addEventListener("click",()=>{
    if ( songIndex>=9)
     {
        songIndex=0
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    masterSongName.innerText=songs[songIndex].song;
    audioElement.play();
    masterPlay.classList.remove("fa-Play-circle");
    masterPlay.classList.add("fa-pause-circle");
})