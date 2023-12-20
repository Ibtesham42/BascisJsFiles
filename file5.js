//Scope 

function an(){
    const user = "Sham"
    function aw(){
        // console.log(user);
    }
    aw()
}
an()

//THIS &&& Arrow Function

const obj ={
    User: "Ibt",
    id:"87",
    webUser: function(){
        console.log(`${this.User},Welocme to our WEbsite`);      // This Keyword refer to the current context / Current Values {    }
        console.log(this);

    }

}
obj.webUser();

//Arrow Function

const func =(n1,n2) =>{
    return n1 +n2

}
console.log(func(3,6));


const fun =(n1,n2) => (n1 +n2)      // usingg this arrow function can return without using return 


console.log(fun(3,6));


//Imediately invoke function

(function nam(){
    console.log("Invoke Func");
})();

( () => {
    console.log("Imidiatle invoke n Array Function");
})();

( (name) => {
    console.log(`Hay ${name}`);
})("Calling BY invoke N Array Func");

