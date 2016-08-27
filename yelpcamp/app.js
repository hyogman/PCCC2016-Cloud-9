var express = require("express"); 
var app = express(); 
var bodyParser = require("body-parser");

var campgrounds = [
        {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name:"Granite Peak", image:"https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"}, 
        {name:"Goat's Rest", image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"},
         {name:"Salmon Creek", image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
        {name:"Granite Peak", image:"https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg"}, 
        {name:"Goat's Rest", image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg"}
    ]; 


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){

    
    res.render("campgrounds", { campgrounds: campgrounds });
});

app.get("/campgrounds/new", function(req, res) {
   res.render("new.ejs"); 
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name; 
    var image = req.body.image; 
    var newCampground = { name: name, image: image };
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is running"); 
});