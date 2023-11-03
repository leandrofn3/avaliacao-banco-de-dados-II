import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import authMiddleware from "../middlewares/auth.middleware";
import { idMiddleware } from "../middlewares/id.middleware";
import { userCreateMiddleware } from "../middlewares/userCreate.middleware";

const router = Router();
const controller = new UserController();

router.get("/users", authMiddleware, controller.index);
router.post("/users/create", userCreateMiddleware, controller.create);
router.delete("/users/delete/:id", [authMiddleware, idMiddleware], controller.delete);
router.put("/users/update/:id", [authMiddleware, idMiddleware], controller.update);

router.get("/user/tweets/:id", [authMiddleware, idMiddleware], controller.listTweetsUser)

export default router;