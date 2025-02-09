import express from "express";
// import { test } from "../middleware/testMiddleware.js";
import { getUser, insertUser } from "../controller/user.js";

const router = express.Router();

// router.get("/get-user", test, getUser);

router.post("/insert-user", insertUser);

router.get("/get-user", getUser);

export default router;