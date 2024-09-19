class Ball {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = random(4, 12);
    this.speed = random(0.5, 1.5).toFixed(2);
    this.color = new p5.Vector(parseInt(random(255)), parseInt(random(255)), parseInt(random(255)));
  }

  init() {
    push()
    ellipseMode(CENTER)
    fill(this.color.x, this.color.y, this.color.z);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
    pop();
    this.fall();
  }

  fall() {
    this.y += this.speed * this.r;
    if (this.y > width) {
      this.reset();
    }
  }

  reset() {
    if(balls.length > 40) {
      balls = balls.filter(({ id }) => id !== this.id);
      return
    }
    // balls = balls.filter(({ id }) => id !== this.id);
    this.y = -this.r;
    this.x = random(0, width);
    this.r = random(2, 10);

  }
}
