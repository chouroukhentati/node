const fs =require('fs')
let file=process.argv[2]
let str=fs.readFileSync(file).toString().split('\n')
console.log(str.length-1)