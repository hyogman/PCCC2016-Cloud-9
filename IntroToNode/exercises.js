var cat = require("cat-me");

console.log(cat());  


function echo(whattosay, amnt) {
    for (var i = 1; i <= amnt; i++) {
        console.log(whattosay);
    }
}

function average(scores) {
    var sum = 0; 
    scores.forEach(function(score){
        sum += score; 
    });
    
    var average = sum/scores.length; 
    return Math.round(average);
}

var numArray = [90, 98, 89, 100, 100, 86, 94]; 

console.log(average(numArray));

echo("hi", 5);