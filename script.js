// ==========================
// WEBSITE BY ANGEL ❤️
// ==========================

// --------------------------
// Typing Animation
// --------------------------

const typingText = [
    "You are my sunshine ☀️",
    "My forever person ❤️",
    "The reason I smile every day 🥰",
    "I love you endlessly 💖"
];

let typingIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect(){

    if(charIndex < typingText[typingIndex].length){

        typing.innerHTML += typingText[typingIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,80);

    }else{

        setTimeout(eraseEffect,1800);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typing.innerHTML = typingText[typingIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,40);

    }else{

        typingIndex++;

        if(typingIndex >= typingText.length){

            typingIndex = 0;

        }

        setTimeout(typeEffect,300);

    }

}

typeEffect();


// --------------------------
// Love Timer
// --------------------------

// Change this date ❤️
const loveDate = new Date("2025-01-01T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now - loveDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60))%24);

    const minutes = Math.floor((diff/(1000*60))%60);

    const seconds = Math.floor((diff/1000)%60);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(updateCounter,1000);

updateCounter();


// --------------------------
// Read Letter Button
// --------------------------

document
.getElementById("readLetter")
.onclick=function(){

document
.getElementById("letter")
.scrollIntoView({

behavior:"smooth"

});

};


// --------------------------
// Gallery Button
// --------------------------

document
.getElementById("galleryBtn")
.onclick=function(){

document
.getElementById("gallery")
.scrollIntoView({

behavior:"smooth"

});

};


// --------------------------
// Floating Hearts
// --------------------------

const heartContainer=document.getElementById("hearts");

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*30)+"px";

heart.style.animationDuration=(6+Math.random()*6)+"s";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,350);

// ==========================
// MUSIC PLAYER
// ==========================

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const songTitle = document.getElementById("songTitle");

const playlist = [
    {
        title: "Our Song ❤️",
        file: "music/song1.mp3"
    },
    {
        title: "Forever Us 💕",
        file: "music/song2.mp3"
    }
];

let currentSong = 0;
let isPlaying = false;

function loadSong(index){

    audio.src = playlist[index].file;
    songTitle.innerHTML = playlist[index].title;

}

loadSong(currentSong);

playBtn.onclick = function(){

    if(isPlaying){

        audio.pause();

        playBtn.innerHTML="▶";

        isPlaying=false;

    }else{

        audio.play();

        playBtn.innerHTML="⏸";

        isPlaying=true;

    }

};

nextBtn.onclick=function(){

    currentSong++;

    if(currentSong>=playlist.length){

        currentSong=0;

    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML="⏸";

    isPlaying=true;

};

prevBtn.onclick=function(){

    currentSong--;

    if(currentSong<0){

        currentSong=playlist.length-1;

    }

    loadSong(currentSong);

    audio.play();

    playBtn.innerHTML="⏸";

    isPlaying=true;

};

audio.addEventListener("timeupdate",()=>{

    const percent=(audio.currentTime/audio.duration)*100;

    progress.value=percent||0;

});

progress.addEventListener("input",()=>{

    audio.currentTime=(progress.value/100)*audio.duration;

});

volume.addEventListener("input",()=>{

    audio.volume=volume.value;

});

audio.addEventListener("ended",()=>{

    nextBtn.click();

});


// ==========================
// IMAGE GALLERY
// ==========================

const images=document.querySelectorAll(".gallery-item img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeBtn=document.querySelector(".close-lightbox");

const prevImage=document.querySelector(".lightbox-prev");

const nextImage=document.querySelector(".lightbox-next");

let imageIndex=0;

images.forEach((img,index)=>{

img.onclick=function(){

imageIndex=index;

showImage();

lightbox.style.display="flex";

};

});

function showImage(){

lightboxImage.src=images[imageIndex].src;

}

closeBtn.onclick=function(){

lightbox.style.display="none";

};

nextImage.onclick=function(){

imageIndex++;

if(imageIndex>=images.length){

imageIndex=0;

}

showImage();

};

prevImage.onclick=function(){

imageIndex--;

if(imageIndex<0){

imageIndex=images.length-1;

}

showImage();

};

window.addEventListener("keydown",(e)=>{

if(lightbox.style.display==="flex"){

if(e.key==="ArrowRight") nextImage.click();

if(e.key==="ArrowLeft") prevImage.click();

if(e.key==="Escape") closeBtn.click();

}

});


// ==========================
// SECRET MESSAGE
// ==========================

const secretMessages = [

"❤️ Shivam, you are the best thing that has ever happened to me.",

"🌎 No matter where life takes us, my heart will always choose you.",

"🥹 Thank you for making every ordinary day feel magical.",

"💖 I love you more than words can ever explain."

];

document.getElementById("secretBtn").onclick = function(){

const random = Math.floor(Math.random()*secretMessages.length);

document.getElementById("secretText").innerHTML = secretMessages[random];

};


// ==========================
// SURPRISE BUTTON
// ==========================

const surprises = [

"💖 Angel is sending you the biggest virtual hug!",

"🌹 Remember... you're my favorite person forever ❤️",

"🥰 You make my world brighter every single day.",

"✨ Every heartbeat whispers your name.",

"💕 I hope this website makes you smile as much as you make me smile.",

"❤️ I love you endlessly, Shivam.",

"🌙 If stars could talk, they'd tell you how much I adore you."

];

document.getElementById("surpriseBtn").onclick = function(){

const random = Math.floor(Math.random()*surprises.length);

document.getElementById("surpriseMessage").innerHTML = surprises[random];

heartExplosion();

};


// ==========================
// HEART EXPLOSION
// ==========================

function heartExplosion(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=(window.innerWidth/2)+"px";

heart.style.top=(window.innerHeight/2)+"px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

document.body.appendChild(heart);

const x=(Math.random()-0.5)*700;

const y=(Math.random()-0.5)*700;

heart.animate([

{

transform:"translate(0,0) scale(1)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) scale(0)`,

opacity:0

}

],{

duration:1800,

easing:"ease-out"

});

setTimeout(()=>{

heart.remove();

},1800);

}

}


// ==========================
// DARK/LIGHT MODE
// ==========================

const themeBtn=document.getElementById("themeBtn");

let dark=true;

themeBtn.onclick=function(){

dark=!dark;

if(dark){

document.body.style.background="linear-gradient(135deg,#090914,#1b1028,#31113e)";

document.body.style.color="white";

themeBtn.innerHTML="🌙";

}else{

document.body.style.background="linear-gradient(135deg,#ffe7f2,#ffd3e8,#fff5fb)";

document.body.style.color="#222";

themeBtn.innerHTML="☀️";

}

};


// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const size=Math.max(this.clientWidth,this.clientHeight);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.position="absolute";

ripple.style.borderRadius="50%";

ripple.style.background="rgba(255,255,255,.5)";

ripple.style.left=e.offsetX-size/2+"px";

ripple.style.top=e.offsetY-size/2+"px";

ripple.style.pointerEvents="none";

ripple.style.transform="scale(0)";

ripple.style.transition=".6s";

this.style.position="relative";

this.style.overflow="hidden";

this.appendChild(ripple);

setTimeout(()=>{

ripple.style.transform="scale(3)";

ripple.style.opacity="0";

},10);

setTimeout(()=>{

ripple.remove();

},600);

});

});


// ==========================
// PAGE LOADED
// ==========================

window.onload=function(){

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity 1.2s";

document.body.style.opacity="1";

},100);

};


// ==========================
// END
// ==========================













