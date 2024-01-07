class User {
    constructor(name) {
        this.name = name
    }

    get name () {
        return this._name
    }

    set name (value) {
        if (value.length < 4)
        {
            console.log('name is too short');
            return
        }
        this._name = value
    }
}

let user = new User("Johnny")
console.log(user.name); // johnny

user = new User("Deep")  // Name is too short
console.log(user);

