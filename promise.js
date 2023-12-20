const promises1 = new Promise(function(resolve, reject){
    //DO an ASYNC Task
    //DB calls, Cryptography
    setTimeout(function(){
        console.log("Hay ASyns");
        resolve();// it connect to then() function

    },1000)

})
promises1.then(function(){
    console.log("Then Asyns");
})


//                OR               .                 
//..................without using  variable..............................


new Promise(function(resolve, reject){
    //DO an ASYNC Task
    //DB calls, Cryptography
    setTimeout(function(){
        console.log("Hay ASyns");
        resolve();// it connect to then() function

    },1000)

}).then(function(){
    console.log("Then Asyns");
})


//.............Or...................
const promise4 = new Promise(function(resolve,reject){ // use resolve n reject
    setTimeout(function(){
        let error = true
        if(!error)
        {
            resolve({username:"Ibtesham",pass:"2233"})

        }
        else{
            reject("Error Something Went Wrong")
        }
    },1000)
})
promise4.then((user) =>
{
    console.log(user);
    return user.username// it return to down then() function 
})
.then((username) =>{ // it reurn here  return user.username
    console.log(username);
})
.catch(function(error) // for error maitain
{
    console.log(`mistake hrere ${error}`);
}).finally(()=>{
    console.log("Finaly is resolve or rejected");
})

