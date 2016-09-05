var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo");


// Post, title, content

var postSchema = new mongoose.Schema({
   title:String, 
   content:String
});

var Post = mongoose.model("Post", postSchema);



// USER, email and name
var userSchema = new mongoose.Schema({
  email:String, 
  name:String,
  posts:[postSchema]
});

var User = mongoose.model("User", userSchema);



// var newUser = new User({
//   email:"yo@gmail.com",
//   name: "Jim Doe"
// });




// newUser.posts.push({
//   title:"how to eat kiwi", 
//   content:"dlksajflkdsjalg;kjdsal;kgjelwkajglekwjalgewa"
// });

// newUser.save(function(err, user){
//   if(err) {
//       console.log(err);
//   }  else {
//       console.log(user);
//   }
// });

// var newPost = new Post({
//     title:"Relfections on apples",
//     content:"they are great!!!"
// })

// newPost.save(function(err, post){
//     if (err) { console.log(err); }
//     else {
//         console.log(post);
//     }
// })



User.findOne({name: "Jim Doe"}, function(err, user){
    if(err) { console.log(err) }
    else {
       user.posts.push({
           title:"three things i really like",
           content:"cats, cats, cats"
       });
    
       user.save(function(err, user){
           if(err) { console.log(err) }
           else {
               console.log(user);
           }
       });
    }
});


