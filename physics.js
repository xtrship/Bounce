const canvas = document.getElementById('myCanvas');

const ctx = canvas.getContext('2d');
console.log(ctx);

// This is to find the center of the canvas element

let x = ctx.canvas.width;
let y = ctx.canvas.height;


// Testing to make sure centre works
ctx.beginPath();
ctx.rect(x/2, y/2, 50, 50);
ctx.fill();


console.log(ctx.rect(x/2, y/2, 50, 50));