let express = require("express");
let app = express();
let db = [];


app.get('/',function(req,res){
    res.send("HI welcome");
    
    });

app.get('/addNew/:number',function(req,res){
    console.log('Params',req.params);
    
    res.send("HI welcome");

});

app.listen(4000);
console.log("Server is runing on Port 4000");
