//Date

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


// Array
const arr1 = [1,2,3,4]
const arr2 =[5,6,7,8]
const ar3 = arr1.concat(arr2) // for merging array
console.log(ar3);

const arr3 =[...arr1,...arr2]// Merging array  mostly used
console.log(arr3);


// For convert multiple array in single array


const aa = [1,2,3,[4,6,[7,8,[77,55,44]]]]

const ab = aa.flat(Infinity)   // For convert multiple array in single array

console.log(ab);

//Convert to Array

const abc = "Ibtesham"

console.log(Array.from(abc)); // Convert abc var to Array

let score1 = 100
let score2 =400
let score3 =300

console.log(Array.of(score1,score2,score3)); //Convert to an Array