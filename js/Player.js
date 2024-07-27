class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.isDamaged = false;
    }

    show() {
        fill(!this.isDamaged ? '#fff' : '#f00')
        rect(this.x, this.y, 10, 20)
    }
}