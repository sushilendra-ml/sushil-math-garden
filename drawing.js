const BACKGROUND_COLOR = '#000000';
const LINE_COLOR = '#BCFF00'; //'#FFFFFF';
const LINE_WIDTH = 5;

var canvas;
var context;

let currentX = 0; currentY = 0; previousX = 0; previousY = 0;
let isPainting = false;

function prepareCanvas() {
    console.log('Preparing canvas');

    canvas = document.getElementById('my-canvas');
    context = canvas.getContext('2d');
    
    context.fillStyle = BACKGROUND_COLOR;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.lineJoin = 'round';

    canvas.addEventListener('mousedown', function (event) {
        isPainting = true;
    });

    canvas.addEventListener('touchstart', function(event) {
        isPainting = true;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;
    });

    canvas.addEventListener('mouseup', function (event) {
        isPainting = false;
    });

    canvas.addEventListener('touchend', function(event) {
        isPainting = false;
    });

    canvas.addEventListener('mousemove', function (event) {
        // console.log('Mouse move event fired');
        previousX = currentX;
        previousY = currentY;
        currentX = event.clientX - canvas.offsetLeft;
        currentY = event.clientY - canvas.offsetTop;

        draw();
    });

    canvas.addEventListener('touchmove', function (event) {
        // console.log('Mouse move event fired');
        previousX = currentX;
        previousY = currentY;
        currentX = event.touches[0].clientX - canvas.offsetLeft;
        currentY = event.touches[0].clientY - canvas.offsetTop;

        draw();
    });

    canvas.addEventListener('mouseleave', function(event) {
        isPainting = false;
    });


}

function draw() {
    if (isPainting) {
        context.beginPath();
        context.moveTo(previousX, previousY);
        context.lineTo(currentX, currentY);
        context.closePath();
        context.stroke();
    }
}

function clearCanvas() {
    currentX = 0; currentY = 0; previousX = 0; previousY = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}