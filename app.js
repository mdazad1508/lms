const express = require("express");
const bodyParser = require("body-parser");
const app = express();

var task =[];


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine","ejs");

app.get("/",function(req,res){
    
    res.render("index",{newAsg :task});
    
});

app.get("/people",function(req,res){
    res.render("list");

   
   

    }
)


app.post("/",function(req,res){
    var assg = req.body.text;
    task.push(assg);

    res.redirect("/");
})



app.listen(4000,function(){
    console.log("server is running on port 4000");
})

