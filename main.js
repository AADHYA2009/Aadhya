function setup() {
    video = createCapture(VIDEO);
    video.size(450, 450);
    canvas = createCanvas(400,300);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#49c0de");
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(){
    if(results.length > 0)
    {
        console.log(results);
    }
}