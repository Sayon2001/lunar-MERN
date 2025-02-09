import express from "express";

import { authUser } from "../controller/auth.js";

const router = express.Router();

router.post("/auth-user", authUser);

export default router;