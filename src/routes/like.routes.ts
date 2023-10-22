import { Router } from "express";
import { LikeController } from "../controllers/like.controller";

const router = Router();
const controller = new LikeController();

router.get("/like", controller.index);
router.post("/like/create", controller.create);
router.delete("/like/delete/:id", controller.delete);

export default router;