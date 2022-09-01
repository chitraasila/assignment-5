const pi = 22 / 7;
class Cylinder {
  constructor(r, h) {
    this.radius = r;
    this.height = h;
  }
  getVolume() {
    return pi * this.radius ** 2 * this.height;
  }
}

class Sphere {
  constructor(r) {
    this.radius = r;
  }
  getVolume() {
    return (4 / 3) * pi * this.radius ** 3;
  }
}

class Cone {
  constructor(r, h) {
    this.radius = r;
    this.height = h;
  }
  getVolume() {
    return (pi * this.radius ** 2 * this.height) / 3;
  }
}

//Volume of Cylinder
let obj = new Cylinder(10, 3);
console.log(obj.getVolume().toFixed(4));

//Volume of Sphere
let objSphere = new Sphere(10);
console.log(objSphere.getVolume().toFixed(4));

//Volume of Cone
let objCone = new Cone(10, 3);
console.log(objCone.getVolume().toFixed(4));
