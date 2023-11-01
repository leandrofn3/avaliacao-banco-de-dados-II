import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();
const controller = new UserController();

router.get("/users", controller.index);
router.post("/users/create", controller.create);
router.delete("/users/delete/:id", controller.delete);
router.put("/users/update/:id", controller.update);

router.get("/user/tweets/:id", controller.listTweetsUser)

export default router;