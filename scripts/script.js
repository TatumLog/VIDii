// JavaScript Document
console.log("Howdy!");


const audioPlayer = document.getElementById('audioPlayer');
const raceauto = document.querySelector('.afbeelding2');

// Speel het MP3-bestand af wanneer er over de raceauto wordt gehoverd
raceauto.addEventListener('mouseover', () => {
    // console.log("over");
    audioPlayer.play();
});

// Pauzeer het MP3-bestand wanneer de hover over de raceauto wordt verwijderd
raceauto.addEventListener('mouseout', () => {
    // console.log("out");
    audioPlayer.pause();
});	