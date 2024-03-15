const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const router = require("./routes")
const bodyParser = require("body-parser")
dotenv.config();

mongoose.connect(String(process.env.MONGODB_URL),{
  dbName:"auth"
});
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES

// app.use("/v1/user", userRoute);

router.routerIndex(app)

app.listen(8000, () => {
  console.log("Server is running 8000"); 
});
