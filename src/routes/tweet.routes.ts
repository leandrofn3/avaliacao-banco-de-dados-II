import { Router } from "express";
import { TweetController } from "../controllers/tweet.controller";

const router = Router();
const controller = new TweetController();

router.get("/tweets", controller.index);
router.post("/tweet/create", controller.create);
router.delete("/tweet/delete/:id", controller.delete);
router.put("/tweet/update/:id", controller.update)

export default router;