import express from "express";
import userRoute from "./router/userRoute.js"

const app = express();

const port = 5050;

app.use('/api', userRoute) // /api/get-user

app.listen(port, () => {
    console.log(`Hello World! Server has started on port: ${port}`);
})