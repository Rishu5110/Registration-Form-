const express=require("express")
const cors = require("cors")
const bodyparser = require("body-parser")

const app=express();

app.use(cors()) // If different frontend and backend

app.use(bodyparser.json());

let data = [];

app.post("/send-data", (req, res) => {

    data.push(req.body);

    return res.json({msg : "Data Send Successfully"});

})

app.get("/get-data", (req,res) => {

    return res.status(200).json({data});

})


app.listen(3000,()=>
    {
        console.log("Server is Running 3000");
    })