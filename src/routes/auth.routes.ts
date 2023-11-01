import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";

const router = Router();
const controller = new AuthController();

router.post("/login", controller.create);


export default router;