import express from "express"
import { getUser } from "../controller/user.js"
import { test } from "../middleware/testMiddleware.js"

const router = express.Router()

router.get("/get-user", test, getUser)

export default router;