var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["PacMan1.png", "PacMan2.png"],
  ["PacMan3.png", "PacMan4.png"],
];
var direction = 0;
var focus = 0;
const movementAmount = 20; // Defined a constant for the pixel movement

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2;
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth);
  img.src = pacArray[direction][focus];

  if (direction) {
    pos -= movementAmount;
  } else {
    pos += movementAmount;
  }

  img.style.left = pos + "px";
}

// Image preloading
const preloadImages = () => {
  pacArray.forEach((directionArray) => {
    directionArray.forEach((image) => {
      new Image().src = image;
    });
  });
};

// Run image preloading
preloadImages();

// Run the animation every 100 milliseconds
setInterval(Run, 100);

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0;

  return direction;
}
