var currentVid = document.getElementById('watch'); // issue is its stuck on zoom, no idea how to fix this. Might have to not do this one properly or clone it several times so there is a different link for each one.
var collection = [
    "img/breathe.webm", 
    "img/pump.webm",
    "img/heart.webm" 
];

var sfx = [
    "Breathe",
    "Pump",
    "Heart"
];

function PlayVideo(VideoIndex){
    currentVid.src = collection[VideoIndex];
    currentVid.play(img/pump.webm);

    if(currentVid.src.includes("")){ // i have no idea what the fuck im doing i have never touched JS in my life i should come back to this later 3/2/26
        return;
    }

    document.getElementById("overlay").setAttribute("hidden", "");
}

function ZoomClick(){ // i changed this to my own code but it didnt do anything different. The sites love to talk to unreal which makes sense but pisses me off. 
    var watchVid = document.getElementById("watch");
    var overlay = document.getElementById("overlay");

    watchVid.setAttribute("src", "img/ZOOM.webm"); 
    watchVid.play();

    overlay.setAttribute("hidden", "");
}