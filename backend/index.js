const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080
const connection = require("./config/connection")
const { notFound, errorHandler } = require("./middlewares/errorHandler")
const authRoute = require("./routes/authRoutes")
const cookieParser = require("cookie-parser")
const productRouter = require("./routes/productRoutes")
const morgan = require("morgan")

// Morgan middleware is used to track the request status such as 
// time, type and client type.
app.use(morgan("dev"))



app.use(express.json())
app.use(cookieParser())

app.use("/api/user",authRoute)

app.use("/api/product",productRouter)

app.use(notFound)
app.use(errorHandler)



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


