 const express = require("express");

 const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello, world</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: sharan@gmail.com");
});

app.get("/about", function(request, response){
    response.send("It's me @sharan.");
});

app.get("/hobbies", function(request, response){
    response.send("Gymming.");
});

 app.listen(3000, function(){
    console.log("Server started on port 3000");
 });
