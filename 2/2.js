const den = "Ñ@#W$9876543210?!abc;:+=-,._ ";
let mlh;
function preload() {
  mlh = loadImage("mlh.png");
}
function setup() {
  noCanvas();
  mlh.loadPixels();
  for (let j = 0; j < mlh.height; j++) {
    let r = "";
    for (let i = 0; i < mlh.width; i++) {
      const pin = (i + j * mlh.width) * 4;
      const avg = (mlh.pixels[pin + 0]+mlh.pixels[pin + 1]+mlh.pixels[pin + 2]) / 3;
      const len = den.length;
      const ci = floor(map(avg, 0, 255, len, 0));
      const c = den.charAt(ci);
      if (c == " ") r += "&nbsp;";
      else r += c;
    }
    createDiv(r);
  }
}
