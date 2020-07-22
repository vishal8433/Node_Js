var fs = require('fs')

fs.writeFile('module.js','i am happy dude',function(err){
    console.log("DATA SAVED")
})