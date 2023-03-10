const promise = new Promise (function(resolve, reject)
{
    resolve("Hey!")
})

const  cows = 5;

const countCows = new Promise(function(resolve, reject)
{
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }
    else 
    {
        reject("There is not cows in the farm")
    }
})

countCows.then((result) => { 
console.log(result);})
.catch((error) => { console.log(error)})
.finally(() => console.log("Finally"));
