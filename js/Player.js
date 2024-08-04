class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.isDamaged = false;
    }

    show() {
        push()
        rectMode(CENTER);
        noStroke();
        fill(!this.isDamaged ? '#fff' : '#f00')
        rect(this.x, this.y, 10, 20)
        pop();
    }
}