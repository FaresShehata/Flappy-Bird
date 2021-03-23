class Bird {

  constructor() {
    this.x = 75;
    this.y = height / 2;
    this.w = 18;

    this.velocity = 0;
    this.gravity = 0.7;
    this.upforce = -20;
  }

  hop() {
    this.velocity += this.upforce;
  }

  hits(pipe) {
    const xs = (
      this.x + this.w > pipe.x &&
      this.x - this.w < pipe.x + pipe.w);

    const top = (
      this.y - this.w < pipe.space);

    const bottom = (
      this.y + this.w > pipe.gap + pipe.space);

    return (xs && (top || bottom));
  }

  update() {
    this.velocity += this.gravity;
    this.velocity *= 0.95;
    this.y += this.velocity;

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }

  show() {
    noStroke();
    fill(255, 200, 0);
    ellipse(this.x, this.y, 36);
  }
}