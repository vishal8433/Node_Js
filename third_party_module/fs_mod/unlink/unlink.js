var fs = require('fs')

fs.unlink('delete.txt',function(err){
    console.log('file deleted')
})