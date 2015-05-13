var canvas = document.getElementById("canvas");
var context = canvas.getContext('2d');

context.lineWidth = 5;
context.lineCap = 'round';
context.lineJoin="round";


var mouse = {x: 0 , y: 0};

/* Mouse Capturing Work */


canvas.addEventListener('mouseout', function(e) {
  canvas.removeEventListener('mousemove', onPaint);

})

/*
when mouse is moving this finds where the mosue is
*/
canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - canvas.offsetLeft;
  mouse.y = e.pageY - canvas.offsetTop;
});

/*
begins path when mouse is down
*/
canvas.addEventListener('mousedown', function(e) {
    context.moveTo(mouse.x, mouse.y);
    mouse.x = e.pageX - canvas.offsetLeft;
    mouse.y = e.pageY - canvas.offsetTop;
    context.beginPath();
    context.arc(mouse.x, mouse.y, 0.1, 0, 2*Math.PI);
    context.stroke();


    canvas.addEventListener('mousemove', onPaint);
});


canvas.addEventListener('mouseup', function(e) {
    canvas.removeEventListener('mousemove', onPaint);
});


var onPaint = function(e) {
  context.lineTo(mouse.x, mouse.y);
  context.stroke();
}


function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function changeRed() {
  context.strokeStyle = '#ff0000';
}

function changeBlack() {
  context.strokeStyle = "#000000"; 
}
