const express = require("express");
const app = express();
const port = process.env.PORT || 2345;
const connect = require("./config/db")


app.use(express.json());


app.get("/", (req, res)=>{
    return res.send("Hello");
})



app.listen(port, (req,res)=>{
    connect()
    console.log(`listening to port ${port}`)
})