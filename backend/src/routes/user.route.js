import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    req.auth.userId; // get the user ID of the logged in user
    res.send("User route with GET method");
});

export default router;
