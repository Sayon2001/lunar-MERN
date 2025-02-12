import express from "express";
import { authUser } from "../middleware/authMiddleware.js";
// import { test } from "../middleware/testMiddleware.js";
import { deleteUser, editUser, getUser, insertUser } from "../controller/user.js";
import { ageVerfication } from "../middleware/ageVerficationMiddleware.js";

const router = express.Router();

// router.get("/get-user", test, getUser);

router.post("/insert-user", authUser, ageVerfication, insertUser);

router.get("/get-user", getUser);

router.delete("/delete-user/:id", authUser, deleteUser);

router.patch("/edit-user/:id", authUser, editUser);

export default router;