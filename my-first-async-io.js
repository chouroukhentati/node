const fs =require('fs')
let file=process.argv[2]
let str=fs.readFile(file,(er,data)=>{
    if(er){
        console.log(er)
    }else{
       console.log(data.toString().split('\n').length-1)
    }
    
})
