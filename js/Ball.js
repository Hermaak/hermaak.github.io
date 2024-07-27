class Ball {
  constructor(x, y, id) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.r = random(4, 12);
    this.speed = random(0.5, 1.5).toFixed(2);
    // this.color = "#FF174455";
    // this.color = "#001744ff";
    // this.color = '#ff0000';
    this.color = new p5.Vector(parseInt(random(255)), parseInt(random(255)), parseInt(random(255)));
    this.sci = Math.round(Math.random() * (scientists.length - 1));
  }

  init() {
    fill(this.color.x, this.color.y, this.color.z);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
    // line(this.x, this.y, this.x + 50, this.y - 150);
    // line(this.x + 50, this.y - 150, this.x + 100, this.y - 150);
    // stroke(this.color);
    // text(
    //   `${scientists[this.sci].name} (${round(this.y)})`,
    //   this.x + 110,
    //   this.y - 120
    // );
    // text(`🏳 ${scientists[this.sci].origin})`, this.x + 110, this.y - 90);
    // rect(this.x + 100, this.y - 150, 200, 80);
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
    this.sci = Math.round(Math.random() * (scientists.length - 1));

  }
}
