let src;
let poem;
let mlh;
let start = 0;
function preload() {
  mlh = loadImage("mlh.png");
  src = loadStrings("mlh.txt");
}
function setup() {
  createCanvas(800, 800); 
  poem = src.join(' ');
  textFont("Courier-Bold");
}
function draw() {
  background(0);
  frameRate(10);
  let charIndex = start;
  let w = width / mlh.width;
  let h = height / mlh.height;
  mlh.loadPixels();
    for (let j = 0; j < mlh.height; j++) {
  for (let i = 0; i < mlh.width; i++) {
      const pin = (i + j * mlh.width) * 4;
      const avg = (mlh.pixels[pin + 0]+mlh.pixels[pin + 1]+mlh.pixels[pin + 2]) / 3;
      noStroke();
      fill(avg);      
      textSize(w*1.2);
      textAlign(CENTER, CENTER);
      
      text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
      charIndex++;
    }
  }
  start++;
}