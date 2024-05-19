// synchronous or blocking;- line to line execution
// asynchronous or blocking:- line to line not huarntedd call back will fire

const fs= require("fs")
let text =fs.readFile("del.txt", "utf-8",(err,data)=>{
    console.log(data)

});
console.log("this is message...")


