var fs= require('fs')

fs.readFile('module.js','utf8' , function(err,data){
    console.log(data)
})