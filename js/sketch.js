let balls = [];


let canvas,
  button,
  slider,
  span;

let intro;

const num_balls = 5;

function preload() {
  intro = loadImage("assets/img/intro.svg");
}

function setup() {
  canvas = createCanvas(innerWidth, innerHeight + 100);
  canvas.parent(document.querySelector(".sketch"));

  for (var i = 0; i < num_balls; i++) {
    balls.push(new Ball(random(0, width), random(-500, -100), i));
  }
}

function draw() {
  background("#111");
  imageMode(CENTER);
  image(intro, width * 0.5, height * 0.5, intro.width / 2, intro.height / 2);

  // balls.forEach((ball) => {
  //   ball.init();
  // });
}

// function mouseDragged() {
//   balls.push(new Ball(mouseX, mouseY, new Date()));
// }
