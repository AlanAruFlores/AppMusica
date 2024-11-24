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
    document.querySelectorAll("#button-have-ever-seen1"),
    document.querySelectorAll("#button-have-ever-seen2"),
    document.querySelectorAll("#button-have-ever-seen3"),
    document.querySelectorAll("#button-have-ever-seen4"),
    document.querySelectorAll("#button-have-ever-seen5"),
    document.querySelectorAll("#button-have-ever-seen6"),
    document.querySelectorAll("#button-have-ever-seen7"),
    document.querySelectorAll("#button-have-ever-seen8")
];
let buttons_pause = [
    document.querySelectorAll("#button-pause-have-ever-seen1"),
    document.querySelectorAll("#button-pause-have-ever-seen2"),
    document.querySelectorAll("#button-pause-have-ever-seen3"),
    document.querySelectorAll("#button-pause-have-ever-seen4"),
    document.querySelectorAll("#button-pause-have-ever-seen5"),
    document.querySelectorAll("#button-pause-have-ever-seen6"),
    document.querySelectorAll("#button-pause-have-ever-seen7"),
    document.querySelectorAll("#button-pause-have-ever-seen8")

];

console.log(buttons_play[0]);
for(let j = 0 ; j<2; j++ ){
    for(let i = 0 ; i < 8; i++){
        let button = buttons_play[i];
        let button_pause = buttons_pause[i];
        
        button[j].addEventListener("click", ()=>{
            audios[i].play();
            button_pause[j].style.display="block";
            button[j].style.display="none";
        });
    
        button_pause[j].addEventListener("click",()=>{
            audios[i].pause();
            button_pause[j].style.display="none";
            button[j].style.display="block";
        });
    }
}


