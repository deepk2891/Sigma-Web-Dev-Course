//  let obj = {
//      a: 1,
//      b: "Deep"
//  }
//  console.log(obj);


//  let animal = {
//      eats: true
//  }
//  let rabbit = {
//      jumps: true
//  }

//  rabbit.__photo__ = animal  // sets rabbit[[prototype]] = animal

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...");
    }

    eats () {
        console.log("Kha rha hu...roar");
    }
    jumps () {
        console.log("Kood rha hu...");
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        // this.name = name
        console.log("Object is created and he is a lion");
    }
}

let a = new Animal("Bunny")
console.log(a.name);

let l = new Lion("Shera")
console.log(l);

