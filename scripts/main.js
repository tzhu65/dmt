var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

context.lineWidth = 5;
context.lineCap = 'round';
context.lineJoin="round";

var mouse = {x: 0 , y: 0};

// Mouse Capturing Work
canvas.addEventListener('mouseout', function(e) {
  canvas.removeEventListener('mousemove', onPaint);
});

// When mouse is moving this finds where the mouse is
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - canvas.offsetLeft;
  mouse.y = e.pageY - canvas.offsetTop;
});

// Begins path when mouse is down
canvas.addEventListener('mousedown', function(e) {
    context.moveTo(mouse.x, mouse.y);
    mouse.x = e.pageX - canvas.offsetLeft;
    mouse.y = e.pageY - canvas.offsetTop;
    context.beginPath();
    context.arc(mouse.x, mouse.y, 0.1, 0, 2*Math.PI);
    context.stroke();


    canvas.addEventListener('mousemove', onPaint);
});

// Stop drawing when the mouse is released
canvas.addEventListener('mouseup', function(e) {
    canvas.removeEventListener('mousemove', onPaint);
});

// Draw to the location of the mouse
var onPaint = function(e) {
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
}

// Clear the board to being white again
function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

// Changes the color, a string with the color name can be used instead 
function changeColor(color) {
  context.strokeStlye = color;
}

function changeRed() {
  context.strokeStyle = '#ff0000';
}

function changeBlack() {
  context.strokeStyle = "#000000"; 
}
