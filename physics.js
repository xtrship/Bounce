const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
console.log(ctx);

// This is to find the center of the canvas element
const centreX = canvas.width;
const centreY = canvas.height;

// Making a function that draws the circle on click location
function drop(mouseX, mouseY) {
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 50, 0, Math.PI * 2);
    ctx.stroke();
}

// Adding onclick functionality to draw the circle
canvas.addEventListener('click', function(event){  
    let mouseX = event.clientX - canvas.offsetLeft;
    let mouseY = event.clientY - canvas.offsetTop;

    const radius = 50;
    let dx = 5;  // x velocity
    let dy = 4;  // y velocity

    function update() {
        // Clear the canvas before drawing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw the ball
        drop(mouseX, mouseY);
        
        // Update position
        mouseX += dx;
        mouseY += dy;
        
        // Bounce off walls
        if (mouseX + radius > canvas.width || mouseX - radius < 0) {
            dx = -dx; // Reverse x direction
        }
        
        // Bounce off floor and ceiling
        if (mouseY + radius > canvas.height || mouseY - radius < 0) {
            dy = -dy; // Reverse y direction
        }
        
        // Continue animation
        requestAnimationFrame(update);
    }
    
    // Start the animation
    update();
});