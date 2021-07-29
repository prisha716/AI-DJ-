song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
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
function gotPoses(results) {
     
    if(results.length > 0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristxX + "leftWristY=" + leftWristxY);
       
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);
      }
function draw() {
    image( video,0,0,600,500);
    fill("blue");
    stroke("green");

    circle(leftWristX,leftWristY,20);
    inNumberleftwristY=Number(leftWristY);
    remove_decimal=floor(inNumberleftwristY);
    volume=remove_decimal/500;
    document.getElementById("volume").innerHTML="Volume=" + volume;
    song.setVolume(volume);
}
function play() {
    song.play();
    song.setVolume(1);
    song.rate(1);
}}
