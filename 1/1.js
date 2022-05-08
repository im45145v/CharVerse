const density = 'Ñ@#W$9876543210 ?!abc;:+=-,._  ';
let mlh;

function preload() {
  mlh = loadImage("mlh.png");
}

function setup() {
  createCanvas(600, 600); 
}

function draw() {
  background(0);
  
  let w = width / mlh.width;
  let h = height / mlh.height;
  mlh.loadPixels();
  for (let i = 0; i < mlh.width; i++) {
    for (let j = 0; j < mlh.height; j++) {
      const pixelIndex = (i + j * mlh.width) * 4;
      const red = mlh.pixels[pixelIndex + 0];
      const green = mlh.pixels[pixelIndex + 1];
      const blue = mlh.pixels[pixelIndex + 2];
      const avg = (red + green + blue) / 3;
      noStroke();
      fill(255);
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);
    }
  }
}