const express = require("express");

const app = express();

let items =[];

app.set("view engine", "ejs");

app.use(express.static("puplic"));
app.use(express.urlencoded());


app.get("/", function(req, res) {

   let today = new Date();

   let options = {
      weekday : "long",
      day: "numeric",
      month :"long"
   };
 let day =today.toLocaleDateString("en-US", options);
 
   res.render("list", { kindOfDay: day  , newListItems : items});  
});

app.post("/" ,function(req ,res){
   let item =req.body.newItem;
   items.push(item);
   res.redirect("/");
   })

app.listen(3001, function() {
   console.log("yay");
});
