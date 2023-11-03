import { Router } from "express";
import { LikeController } from "../controllers/like.controller";
import authMiddleware from "../middlewares/auth.middleware";
import { idMiddleware } from "../middlewares/id.middleware";

const router = Router();
const controller = new LikeController();

router.get("/like", authMiddleware, controller.index);
router.post("/like/create", authMiddleware, controller.create);
router.delete("/like/delete/:id", [authMiddleware, idMiddleware], controller.delete);

export default router;