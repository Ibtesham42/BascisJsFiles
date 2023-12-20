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

// console.log(user);

user.greet =function(){
    // console.log(`Hello There ${this.name}`);
}

// console.log(user.greet());  

//Singleton Obj
const n = new Object()
// console.log(n);

//Nesting obj

const n1 = {
    email: "ias@gmail.com",
    fullName:{                           //nested obj
        userFullname:{                   //nested obj
            firstName:"Ibt",
            lastName:"Sham"
        }
    }
}
// console.log(n1.fullName.userFullname.firstName);

//Conbing or Merging Obj

const obj1 = {
    1:'a',
    2:'b'
}
const obj2 = {
    3:'c',
    4:'d'
}
const obj3 = Object.assign({}, obj1, obj2)// For Combine or Merging
// console.log(obj3);

const obj4 = {...obj1,...obj2} // For Combine or Merging
// console.log(obj4);

//Array De-Stracture

const course ={
    name:"Sham",
    age:23,
    fee:'999'
}
const{name: fname} = course//here for changing name if long name = course
const{name} = course//without changing name
console.log(fname);
console.log(name);