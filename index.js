const express = require ("express")
const app=express()
const date = require("./middlewares/date");


app.use(express.static(__dirname +"/public"));

app.get("/home", (req,res) =>{
  res.sendFile(__dirname+"/public/home.html")  
})

app.get("./public/Styles.css", (req, res) => {
    res.sendFile(dirname + "/public/Styles.css");
  });

app.get("/about", (req,res) =>{
    res.sendFile(__dirname+"/public/about.html")  
  })

  app.get("/astyleeee", (req,res) =>{
    res.sendFile(__dirname+"/public/about.html")  
  })

app.get("*",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
}
)


app.listen(5000, (err)=> {
 err?console.log (err):console.log("server is running on port 5000")


})