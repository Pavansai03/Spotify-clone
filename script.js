let song1 = new Audio("Channa Mereya.mp3");
let song2 = new Audio("Deva Deva.mp3");
let song3 = new Audio("Agar Tum Saath Ho.mp3");
let song4 = new Audio("Kesariya.mp3");
let song5 = new Audio("Tum Hi Ho.mp3");
let songs = [song1,song2,song3,song4,song5];
let audioElement;

let footerSongName = document.getElementsByClassName("songNameDisplay");
let songLength = document.getElementById("songLength");
let songDuration = document.getElementById("songDuration");

console.log(footerSongName)
let songNameDisplay = (key,i)=>{
    if(i === 0) {
        footerSongName[0].innerHTML = "Channa Mereya";
        songLength.innerText = "4:49";
        updateTimeDisplay();
    }
    if(i === 1) {
        footerSongName[0].innerHTML = "Deva Deva";
        songLength.innerText = "4:39";
        updateTimeDisplay();

    }
    if(i === 2) {
        footerSongName[0].innerHTML = "Agar Tum Sath Ho";
        songLength.innerText = "5:41";
        updateTimeDisplay();

    } 
    if(i === 3) {
        footerSongName[0].innerHTML = "Kesariya";
        songLength.innerText = "4:28";
        updateTimeDisplay();

    } 
    if(i === 4) {
        footerSongName[0].innerHTML = "Tum Hi Ho";
        songLength.innerText = "4:22";
        updateTimeDisplay();

    } 
    
}

    let footerImg = document.getElementById("footerImg");

let playbtn = document.querySelector("#playbtn");
    playbtn.addEventListener('click',() => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        footerImg.style.opacity = "1"
        playbtn.classList.remove("fa-play-circle");
        playbtn.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        playbtn.classList.remove("fa-pause-circle");
        playbtn.classList.add("fa-play-circle");
        footerImg.style.opacity = "0";

    }
})

    let songslist = document.getElementsByClassName("songItemPlay");

const makeAllPause = ()=>{
    Array.from(songslist).map((element,i) => {
         element.classList.remove("fa-solid","fa-music");
         element.classList.add("fa-play-circle","far",);
          songNum[i].style.color = "black";
          songs[i].pause();
          progress.value = "0";
          songs[i].currentTime = progress.value;
    })
} 
let progress = document.getElementById("progress");
let updateTimeDisplay = ()=>{
  audioElement.addEventListener("timeupdate",()=>{
    let songProgessTime = parseInt(audioElement.currentTime);    
    songDuration.innerText = `${(parseInt(songProgessTime/60))} :  ${parseFloat(songProgessTime%60)}`;
  })
}

let updateTime = ()=>{
   
    audioElement.addEventListener("timeupdate",()=>{
    // console.log(audioElement.currentTime);
       let songProgress = (audioElement.currentTime/audioElement.duration)*100;
       progress.value = songProgress;
    // console.log(songProgress);
})
}
let changeTime = ()=> {
    progress.addEventListener("change", ()=>{
        audioElement.currentTime = (progress.value*audioElement.duration)/100;
        
    })
}

let controlSong = (element, i)=>{
    progress.value = "0";
    let songPlayBtn = element.getElementsByTagName('i');
    makeAllPause();
    songNum[i].style.color="green";
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        footerImg.style.opacity = "1"
        updateTime();
        changeTime();
        playbtn.classList.remove("fa-play-circle");
        playbtn.classList.add("fa-pause-circle");
        songPlayBtn[0].classList.remove("fa-play-circle","far");
        songPlayBtn[0].classList.add("fa-solid","fa-music");
    }
    else{
        audioElement.pause();
        playbtn.classList.remove("fa-pause-circle");
        playbtn.classList.add("fa-play-circle");
        let songPlayBtn = element.getElementsByTagName('i');
        songPlayBtn[0].classList.add("far","fa-play-circle");
        songPlayBtn[0].classList.remove("fa-solid","fa-music");

    }
}

let songNum = document.getElementsByClassName("song");
let pointedSong = document.getElementsByClassName("songItemPlay");
  //console.log(Array.from(songNum));
Array.from(songNum).forEach((element,i) => {
    //  console.log(element,i);
    let songPlay = element.querySelector(".playbutton");
    songPlay.addEventListener("click",() => {
    audioElement = songs[i];
    controlSong(element, i);
    songNameDisplay(element, i);

    let fwd = document.querySelector("#forwardbtn");
    fwd.addEventListener("click",()=>{
         i = i+1;
        if(i>4) {
            i = 0;
        }
        audioElement = songs[i];
        controlSong(element, i);
        songNameDisplay(element, i);
        
        Array.from(songslist).map((element) => {
            element.classList.remove("fa-solid","fa-music");
            element.classList.add("fa-play-circle","far",);
        })
        pointedSong[i].classList.remove("fa-play-circle","far");
        pointedSong[i].classList.add("fa-solid","fa-music");
    })

    let bwd = document.querySelector("#backwardbtn");
    bwd.addEventListener('click',() => {
       i = i-1;
       if(i < 0) {
        i = 4;
       }
       audioElement = songs[i];
       controlSong(element, i);
       songNameDisplay(element, i);
       Array.from(songslist).map((element) => {
        element.classList.remove("fa-solid","fa-music");
        element.classList.add("fa-play-circle","far",);
       })
      pointedSong[i].classList.remove("fa-play-circle","far");
      pointedSong[i].classList.add("fa-solid","fa-music");
    })
    })
})