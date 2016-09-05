var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    { 
        name:"Cloud's rest", 
        image:"https://farm4.staticflickr.com/3270/2617191414_c5d8a25a94.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur libero ac lobortis aliquet. Maecenas tristique tempor lorem, pharetra gravida mi iaculis ut. Sed et turpis ut erat suscipit dapibus. Donec et nisi eu arcu ornare hendrerit non vitae metus. Etiam non enim et tortor luctus porttitor. Praesent dignissim mauris ac velit gravida, in egestas elit pellentesque. Morbi condimentum magna ex, nec dignissim elit hendrerit pulvinar. Morbi elit massa, porttitor ut blandit id, accumsan id felis. Nunc tempus ullamcorper mauris at luctus. Duis imperdiet eu mi eget aliquam. Nulla dictum rutrum mi quis pretium. Pellentesque congue nibh ex, ut tincidunt nunc cursus non. Nullam quis dictum elit. Nullam non diam sed risus vehicula dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet vestibulum risus."
    },
    { 
        name:"Beach Hang", 
        image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur libero ac lobortis aliquet. Maecenas tristique tempor lorem, pharetra gravida mi iaculis ut. Sed et turpis ut erat suscipit dapibus. Donec et nisi eu arcu ornare hendrerit non vitae metus. Etiam non enim et tortor luctus porttitor. Praesent dignissim mauris ac velit gravida, in egestas elit pellentesque. Morbi condimentum magna ex, nec dignissim elit hendrerit pulvinar. Morbi elit massa, porttitor ut blandit id, accumsan id felis. Nunc tempus ullamcorper mauris at luctus. Duis imperdiet eu mi eget aliquam. Nulla dictum rutrum mi quis pretium. Pellentesque congue nibh ex, ut tincidunt nunc cursus non. Nullam quis dictum elit. Nullam non diam sed risus vehicula dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet vestibulum risus."
    },
    { 
        name:"Lots of Trees", 
        image:"https://farm3.staticflickr.com/2311/2123340163_af7cba3be7.jpg", 
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur libero ac lobortis aliquet. Maecenas tristique tempor lorem, pharetra gravida mi iaculis ut. Sed et turpis ut erat suscipit dapibus. Donec et nisi eu arcu ornare hendrerit non vitae metus. Etiam non enim et tortor luctus porttitor. Praesent dignissim mauris ac velit gravida, in egestas elit pellentesque. Morbi condimentum magna ex, nec dignissim elit hendrerit pulvinar. Morbi elit massa, porttitor ut blandit id, accumsan id felis. Nunc tempus ullamcorper mauris at luctus. Duis imperdiet eu mi eget aliquam. Nulla dictum rutrum mi quis pretium. Pellentesque congue nibh ex, ut tincidunt nunc cursus non. Nullam quis dictum elit. Nullam non diam sed risus vehicula dapibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras sit amet vestibulum risus."
    },
];


function seedDB () {
    // remove campgrounds
    Campground.remove({}, function(err){
    if(err) { console.log("error"); } 
    else {
        // console.log("removed campgrounds");
         // add campgrounds 
      data.forEach(function(seed){
          Campground.create(seed, function(err, campground){
              if (err) { console.log(err); }
              else {
                //   console.log("added a campground");
                  Comment.create(
                      { 
                          text: "This campground is great, but wish it had internet",
                          author:"Homer"
                      }, function(err, comment){
                          if(err) { console.log(err); }
                          else {
                            campground.comments.push(comment);
                            campground.save();
                            // console.log("created new comments");
                          }
                  });
                  
              }
          });
          
      });
    }
  });
 }

module.exports = seedDB;


