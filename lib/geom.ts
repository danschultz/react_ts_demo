export class Point {
  constructor(public x: number, public y: number) {

  }

  add(other: Point): Point {
    return new Point(this.x + other.x, this.y + other.y);
  }

  scale(value: number): Point {
    return new Point(this.x * value, this.y * value);
  }

  toString(): string {
    return `x=${this.x}, y=${this.y}`
  }
}

export class Rect {
  constructor(public x: number, public y: number, width: number, height: number) {

  }
}
