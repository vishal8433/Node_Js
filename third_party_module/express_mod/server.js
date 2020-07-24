var express = require('express')
var app = express();

app.get('/' , function(request , response){
    response.send('my first api')
});
app.get('/vishal',function(request,response){
    response.send('this is vishal jain profile')
});
app.listen(3000, function(){
    console.log("my first api runnning on port number 3000!")
})
