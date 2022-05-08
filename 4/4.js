//const density = "Ñ@#W$9876543210?!abc;:+=-,._                    ";
const density = '       .:-i|=+%O#@'
let video;
let asciiDiv;
function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(100, 55);
  asciiDiv = createDiv();
}
function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++) {
    for (let i = 0; i < video.width; i++) {
      const pin = (i + j * video.width) * 4;
      const avg = (video.pixels[pin + 0]+video.pixels[pin + 1]+video.pixels[pin + 2]) / 3;
      const len = density.length;
      const CI = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(CI);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}