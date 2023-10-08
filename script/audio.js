
/*
var audio_have_ever_seen[]  = new Audio("/audio/have-you-ever-seen-the-rain.mp3");
var button_audio_have_ever_seen =  document.getElementById("button-have-ever-seen");
var button_pause_audio_have_ever_seen =  document.getElementById("button-pause-have-ever-seen");

button_audio_have_ever_seen.style.display ="block";
button_pause_audio_have_ever_seen.style.display = "none";

button_audio_have_ever_seen.addEventListener("click", ()=>{
        audio_have_ever_seen.play();
        button_audio_have_ever_seen.style.display ="none";
        button_pause_audio_have_ever_seen.style.display = "block";
});


button_pause_audio_have_ever_seen.addEventListener("click", ()=>{
    audio_have_ever_seen.pause();
    button_audio_have_ever_seen.style.display ="block";
    button_pause_audio_have_ever_seen.style.display = "none";

});

*/

let audios= [
    new Audio("/audio/have-you-ever-seen-the-rain.mp3"),
    new Audio("/audio/genesis-mama-lyrics.mp3"),
    new Audio("/audio/guns-n-roses-lyric-top-song.mp3"),
    new Audio("/audio/maldito-duende-remaster-2018.mp3"),
    new Audio("/audio/cant-help-falling-in-love-official-audio.mp3"),
    new Audio("/audio/si-volvieras-a-mi.mp3"),
    new Audio("/audio/tears-of-the-dragon-lyrics-for-desktop.mp3"),
    new Audio("/audio/Linkin_Park_-_In_the_End.mp3"),

];


let buttons_play = [
    document.getElementById("button-have-ever-seen1"),
    document.getElementById("button-have-ever-seen2"),
    document.getElementById("button-have-ever-seen3"),
    document.getElementById("button-have-ever-seen4"),
    document.getElementById("button-have-ever-seen5"),
    document.getElementById("button-have-ever-seen6"),
    document.getElementById("button-have-ever-seen7"),
    document.getElementById("button-have-ever-seen8")
];
let buttons_pause = [
    document.getElementById("button-pause-have-ever-seen1"),
    document.getElementById("button-pause-have-ever-seen2"),
    document.getElementById("button-pause-have-ever-seen3"),
    document.getElementById("button-pause-have-ever-seen4"),
    document.getElementById("button-pause-have-ever-seen5"),
    document.getElementById("button-pause-have-ever-seen6"),
    document.getElementById("button-pause-have-ever-seen7"),
    document.getElementById("button-pause-have-ever-seen8")

];

for(let i = 0 ; i < 8; i++){
    let button = buttons_play[i];
    let button_pause = buttons_pause[i];
    
    button.addEventListener("click", ()=>{
        audios[i].play();
        button_pause.style.display="block";
        button.style.display="none";
    });

    button_pause.addEventListener("click",()=>{
        audios[i].pause();
        button_pause.style.display="none";
        button.style.display="block";
    });
}
