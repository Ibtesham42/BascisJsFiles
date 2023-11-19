//Object
//Singleton   ....it menans any obj madde using constructor is calleed Singleton

//Obj Literals

const symbl = Symbol("key1")

const user = {
    name: "Ibtesham",
    [symbl]: "Mysymbol",
    age: 24,
    ph: 89767834996,
    location: "India",
    isLogin: false
}
console.log(typeof user[symbl]);

//Object.freeze(user) // Freze funtion for locking boj value not allowing to change

user.name ="Ibt AKhtar" // value will not change as its freeze before change

console.log(user);

user.greet =function(){
    console.log(`Hello There ${this.name}`);
}

console.log(user.greet());  