// Add Canvas and get the mouse X,Y positions to be able to draw a ball anywhere

const canvas = document.getElementById('myCanvas');


const ctx = canvas.getContext('2d');
console.log(ctx);

// This is to find the center of the canvas element

const centreX = canvas.width;
const centreY = canvas.height;

// Making a function that draws the circle on click location

function drop(mouseX, mouseY) {
    ctx.beginPath();
    ctx.rect(mouseX, mouseY, 3, 3);
    ctx.fill();
}

// Adding onclick functionality to draw the circle

/* canvas.addEventListener('click', function(event){  
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;

    drop(mouseX, mouseY);
}); */

let counter = 0;

canvas.addEventListener('mousemove', function(event){  
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;

    const dropResult = drop(mouseX, mouseY);

    if(dropResult === true){
        counter++;
    }

    console.log(counter);
});



