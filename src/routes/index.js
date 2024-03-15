const express = require("express");
const authRouter = require("./auth")
const userRouter = require("./user")
exports.routerIndex = (app)=>{ 
    app.use("/auth", authRouter);
    app.use("/user", userRouter)
   
}