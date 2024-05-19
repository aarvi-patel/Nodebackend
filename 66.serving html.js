const http = require('http')
const fs = require('fs')
const fileContent = fs.readFileSync('del.txt')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(fileContent)
})
// creating server
server.listen(80,'127.0.0.1',()=>{
    console.log("listing on port 80")

})