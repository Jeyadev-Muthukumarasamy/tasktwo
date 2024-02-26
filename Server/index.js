const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require("./db/db");
const router = require("./routes/routes");

app.use(cors());
app.use(express.json());
require('dotenv').config()
connectDb();


app.use("/api",router)

PORT = 3001;

app.listen(PORT,()=>{
    console.log(`server started in port 3000`)
})  