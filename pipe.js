class Pipe {

  constructor() {
    this.x = width;
    this.y = 0;
    this.w = 50;
    this.gap = 175;
    this.space = random(0, height - this.gap);
  }

  update() {
    this.x -= 2;
  }

  offscreen() {
    return (this.x < -1000);
  }

  show() {
    noStroke();
    fill(50, 255, 50);
    rectMode(CORNER);
    rect(this.x, this.y, this.w, this.space);
    rect(this.x, this.space + this.gap, this.w, height - (this.space + this.gap));
  }
}