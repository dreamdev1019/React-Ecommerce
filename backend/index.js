const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080
const connection = require("./config/connection")
const authRoute = require("./routes/authRoutes")


app.use(express.json())
app.use("/api/user",authRoute)
app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log("Connected To DB Success")
    }
    catch(err){
        console.log("Failed to connect to DB")
    }
    console.log(`Listening on port ${PORT}`)
});


