//Nullisg CoaleScing Operator (??)

const a = 5 ?? 10
console.log(a);

var n = null ?? 14
console.log(n);

//Terniary Operator
// condition ? true: false

const k = 89

k <=100 ? console.log("Le then 100") : console.log("Greater then 100")



//For Of Loops

// for (const iterator of object) {
    
// }

const nn =[3,45,5,6,6,76,6]
for(const mn of nn){
    console.log(mn);
}

//Maps

const map = new Map()

map.set('In',"India");
map.set('Up',"UttarPradesh")
map.set('Br',"Bihar")
console.log(map)

//FOR Of && Map

for (const [i, value] of map) {
    console.log(i, " -: ",value);
    
}


// For Each
const c =[5,5,6,,6767,4,]

c.forEach((item) => {
    console.log(item);
    
});

// For Each Does Not Return Value

// Filter 
// const aar = [44,55,667,7,]
// const bn =aar.filter(  (nnm) => nnm > 7)
// console.log(bn);


//Map
const aar = [44,55,667,7,]
const bn =aar.map(  (nnm) => 
{
    if(nnm === 7)
    {
        return nnm +10
    }
    return nnm;
}
)
console.log(bn);

//REduce
const mnum=[1,3,5]
// const tot = mnum.reduce( function (acc, carvle){
//     return acc + carvle
// },0)
// console.log(tot);


// Reduce n Arrow Function
const tot = mnum.reduce( (acc, cur) => (acc+cur),0)
console.log(tot);

