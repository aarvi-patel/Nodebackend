const fs= require("fs")
let text =fs.readFileSync("del.txt", "utf-8")
text=text.replace("js","smile")

console.log(text)
console.log("create new file/...")
fs.writeFileSync("arvi.txt",text)



