var express = require("express"); 
var app = express(); 

app.get("/", function(req,res){
   res.send("Hi there, welcome to the assignment"); 
});

app.get("/speak/:animal", function(req, res) {
    var sounds = {
        dog: "WOOF",
        cow: "MOO", 
        pig:"OINK"
    };
    
    var animal = req.params.animal; 
    var sound = sounds[animal];
    
    if(animal === "pig") {
        res.send("The " + animal + " says " + sound); 
    } else if (animal === "cow") {
        res.send("The " + animal + " says " + sound); 
    } else if (animal === "dog") {
        res.send("The " + animal + " says " + sound); 
    } else {
        res.send("Animal does not exist!!!");
    }
});

app.get("/repeat/:word/:times", function(req, res){
   var word = req.params.word; 
   var times = Number(req.params.times); 
   var printString = "";
   for (var i = 1; i <= times; i++) {
       printString += " " + word; 
   }
   res.send(printString);
});

app.get("*", function(req, res) {
   res.send("Sorry page not found...What are you doing with your life"); 
});

app.listen(process.env.PORT, process.env.IP, function(req, res){
   console.log("Sever running..."); 
});