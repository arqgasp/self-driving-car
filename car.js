class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.widht = width;
    this.height = height;

    this.controls = new Constrols();
  }

  update() {
    if (this.constrols.forward) {
      this.y -= 2;
    }
    if (this.constrols.reverse) {
      this.y += 2;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.rect(
      this.x - this.widht / 2,
      this.y - this.height / 2,
      this.widht,
      this.height
    );
    ctx.fill();
  }
}

