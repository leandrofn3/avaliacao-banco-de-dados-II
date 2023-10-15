import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.get("/users", controller.index);
router.post("/users/create", controller.create);

export default router;