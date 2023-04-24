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

// KNOP 1
var button1985 = document.querySelector("main ol li:nth-of-type(1) a");
var info1985 = document.querySelector("body > ol li:nth-of-type(1)");
var sluit1985 = document.querySelector("body > ol li:nth-of-type(1) button");

button1985.addEventListener("click", open1985);
sluit1985.addEventListener("click", sluiten1985);

function open1985(event) {
    event.preventDefault();

    info1985.classList.add("show");
}

function sluiten1985(event) {
    info1985.classList.remove("show");
}

// KNOP 2
var button1988 = document.querySelector("main ol li:nth-of-type(2) a");
var info1988 = document.querySelector("body > ol li:nth-of-type(2)");
var sluit1988 = document.querySelector("body > ol li:nth-of-type(2) button");

button1988.addEventListener("click", open1988);
sluit1988.addEventListener("click", sluiten1988);

function open1988(event) {
    event.preventDefault();

    info1988.classList.add("show");
}

function sluiten1988(event) {
    info1988.classList.remove("show");
}

// KNOP 3
var button2001 = document.querySelector("main ol li:nth-of-type(3) a");
var info2001 = document.querySelector("body > ol li:nth-of-type(3)");
var sluit2001 = document.querySelector("body > ol li:nth-of-type(3) button");

button2001.addEventListener("click", open2001);
sluit2001.addEventListener("click", sluiten2001);

function open2001(event) {
    event.preventDefault();

    info2001.classList.add("show");
}

function sluiten2001(event) {
    info2001.classList.remove("show");
}

// KNOP 4
var button2007 = document.querySelector("main ol li:nth-of-type(4) a");
var info2007 = document.querySelector("body > ol li:nth-of-type(4)");
var sluit2007 = document.querySelector("body > ol li:nth-of-type(4) button");

button2007.addEventListener("click", open2007);
sluit2007.addEventListener("click", sluiten2007);

function open2007(event) {
    event.preventDefault();

    info2007.classList.add("show");
}

function sluiten2007(event) {
    info2007.classList.remove("show");
}

// KNOP 5
var button2012 = document.querySelector("main ol li:nth-of-type(5) a");
var info2012 = document.querySelector("body > ol li:nth-of-type(5)");
var sluit2012 = document.querySelector("body > ol li:nth-of-type(5) button");

button2012.addEventListener("click", open2012);
sluit2012.addEventListener("click", sluiten2012);

function open2012(event) {
    event.preventDefault();

    info2012.classList.add("show");
}

function sluiten2012(event) {
    info2012.classList.remove("show");
}

// KNOP 6
var button2017 = document.querySelector("main ol li:nth-of-type(6) a");
var info2017 = document.querySelector("body > ol li:nth-of-type(6)");
var sluit2017 = document.querySelector("body > ol li:nth-of-type(6) button");

button2017.addEventListener("click", open2017);
sluit2017.addEventListener("click", sluiten2017);

function open2017(event) {
    event.preventDefault();

    info2017.classList.add("show");
}

function sluiten2017(event) {
    info2017.classList.remove("show");
}
