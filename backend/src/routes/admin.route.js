import { Router } from "express";
import { getAdmin } from "../controller/admin.controller.js";
import { get } from "mongoose";

const router = Router();

router.get("/", getAdmin);

export default router;