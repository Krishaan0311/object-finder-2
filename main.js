status = "";

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(480, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded");
    status = true;
}