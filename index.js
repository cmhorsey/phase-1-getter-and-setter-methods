class Circle {

  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return 2 * Math.PI * this.radius
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2)
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / Math.PI)
  }

  set diameter(newDiameter) {
    return this.radius = newDiameter / 2
  }

  set circumference(newCircumference) {
    return this.radius =  newCircumference  / (2 * Math.PI)
  }
}
