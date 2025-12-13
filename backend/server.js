// import express from "express"
// import dotenv from "dotenv";
// import cors from "cors"
// import  connectDb  from "./config/db.js";
// import foodRouter from "./routes/foodRoute.js";
// import userRouter from "./routes/userRoutes.js";
// import "dotenv/config"
// import cartRouter from "./routes/cartRoute.js";
// import orderRouter from "./routes/orderRoute.js";


// //app config
// const app = express()
// const port  = 4000;


// //middleware
// app.use(express.json())
// app.use(cors());

// //db connection
// connectDb();


// // apiendpoint

// app.use("/api/food", foodRouter)
// app.use("/images",express.static('uploads'))

// app.use("/api/user" , userRouter)
// app.use("/api/cart" , cartRouter)
// app.use("/api/order" ,orderRouter)


// app.get("/",(req,res)=>{
//     res.send("API working")

// })


// app.listen(port , ()=>{
//     console.log(`server started on http://localhost :${port}`)

// })



import express from "express"
import dotenv from "dotenv"; // Keep this line for explicit usage
import cors from "cors"
import  connectDb  from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoutes.js";
// import "dotenv/config" // This line is slightly redundant if using the setup below
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Load environment variables from .env file
dotenv.config();

// app config
const app = express()
// Use process.env.PORT for flexibility, fall back to 4000
const port  = process.env.PORT || 4000;


// middleware
app.use(express.json())
app.use(cors());

// db connection
// NOTE: The 'connectDb' function is where you need to use the MONGO_URL from the .env file.
connectDb();


// api endpoint
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))

app.use("/api/user" , userRouter)
app.use("/api/cart" , cartRouter)
app.use("/api/order" ,orderRouter)


app.get("/",(req,res)=>{
 res.send("API working")

})


app.listen(port , ()=>{
 console.log(`server started on http://localhost:${port}`)
})