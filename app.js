var express = require("express");
var app = express();
const bodyParser = require("body-parser");
const router = express.Router();
app.use(bodyParser.json())

require('./app/routes/customer.routes.js')(app);

app.listen(3000,() => {
    console.log("Started on PORT 3000");
  })


var dogsArr = [];
app.get("/dogs", (req, res, next) => {
    res.json(dogsArr);
   });

 
   app.post('/dogs', function(req, res) {
    var dog = req.body;
    console.log(dog);
    dogsArr.push(dog);
    res.send("Dog added!");
});

app.put("/dogs/:dogsId", (req, res, next)=>{
    dogsArr.forEach(ele=>{
        console.log(ele);
      if (ele.id == req.params.dogsId)
      {
        console.log(ele.id);
        ele.vaccine = 1;
      } 
    });
    res.json({
      message: "Completed a task!",
      dogsArr : dogsArr
    });
  });




  app.delete("/dogs/:dogsId", (req, res, next)=>{
    var index;
    dogsArr.forEach(ele=>{
      
      if (ele.id == req.params.dogsId)
      {
         index = ele.id;
      } 
    });
    dogsArr = dogsArr.splice(index,1);
    res.json({
      message: "Completed a task!",
      dogsArr : dogsArr
    });
  });


 