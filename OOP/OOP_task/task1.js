function Planet(name) {
  this.name = name;
  this.getName = function(){
      return `planet name is ${this.name}`
  }
}

