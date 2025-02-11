import express from "express";
import { authUser } from "../middleware/authMiddleware.js";
// import { test } from "../middleware/testMiddleware.js";
import { getUser, insertUser } from "../controller/user.js";
import { ageVerfication } from "../middleware/ageVerficationMiddleware.js";

const router = express.Router();

// router.get("/get-user", test, getUser);

router.post("/insert-user", authUser, ageVerfication, insertUser);

router.get("/get-user", getUser);

export default router;