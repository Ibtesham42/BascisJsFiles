//Function 
function myFunc(){
    console.log("Hay");
    console.log("Hay");
    console.log("Hay");
    console.log("Hay");
    console.log("Hay");
}
// myFunc()   //To run Function

// function addnumber(n1,n2){
//     console.log(n1+n2);
// }
// addnumber(2,6)

// function addnumber(n1,n2){
//     const r = n1+n2
//     return r
// }
// const r1 = addnumber(4,5)
// console.log("Reuslt: ",r1);


function nam(user){
    return `${user} jusst logged in`
}
console.log(nam("Ibt"));


function calcpric(...n0){  // Array Using Rest Operator ...
    return n0
}
console.log(calcpric(44,55,66,77,3));


//......................................................................................................



// function using object

const obj ={
    name: "Ibt",
    price: 999
}

function nefc(aobj){
    console.log(`${aobj.name} and price is ${aobj.price}`);
}
nefc(obj)// here function calling object