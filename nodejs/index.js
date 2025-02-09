import express from "express";
import userRoute from "./router/userRoute.js"
import authRoute from "./router/authRoute.js"
import { db } from "./database/db.js";

const app = express();

app.use(express.json());

const port = 5050;

app.use('/api', userRoute) // /api/insert-user

app.use('/api', authRoute)

app.listen(port, () => {
    console.log(`Hello World! Server has started on port: ${port}`);
})
