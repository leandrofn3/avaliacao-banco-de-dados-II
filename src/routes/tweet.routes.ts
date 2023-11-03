import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";
import authMiddleware from "../middlewares/auth.middleware";
import { idMiddleware } from "../middlewares/id.middleware";

const router = Router();
const controller = new TweetController();

router.get("/tweets", [authMiddleware], controller.index);
router.post("/tweet/create", [authMiddleware], controller.create);
router.delete("/tweet/delete/:id", [authMiddleware, idMiddleware], controller.delete);
router.put("/tweet/update/:id", [authMiddleware, idMiddleware], controller.update)

export default router;