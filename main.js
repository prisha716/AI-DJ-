song="";
function preload(){
song=loadSound("music.mp3");
}
function setup() {
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(600,500);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded() {
    console.log('PoseNet is started');
}

function draw() {
    image( video,0,0,600,500);
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}