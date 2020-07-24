var express = require('express')
var app = express();
var bodyparser=require('body-parser')
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
var ingridients=[
    {
        "id":"26vj",
        "text":"this"
    },
    {
        "id":"26addxf",
        "text":"side"
    },
    {
        "id":"cbuuw",
        "text":"vishal"
    },
    {
        "id":"ghhj",
        "text":"jain"
    }
];
app.get('/', function(request,response){
    response.send(ingridients);
})
app.post('/',function(request,response){
    var ingridient=request.body;
    if(!ingridient ||ingridient.text===""){
        response.status(500).send({error: "your ingridient must have text"});
    }
    else{
        ingridients.push(ingridient);
        response.status(200).send(ingridients);
    }
})
app.listen(8000, function(){
    console.log("my first api runnning on port number 3000!")
})
