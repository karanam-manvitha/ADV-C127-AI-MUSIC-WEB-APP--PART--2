var zarazara="";
var aajasanam="";

function preload()
{
    zarazara=loadSound("zara zara.mp3");
    aajasanam=loadSound("aaja sanam.mp3");
}

function setup()
{
    canvas=createCanvas(600 ,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
}

function draw()
{
    image(video, 77, 77, 600, 500);
}

function play()
{
    zarazara.play();
    aajasanam.play();
}

function stop()
{
    zarazara.stop();
    aajasanam.stop();
}