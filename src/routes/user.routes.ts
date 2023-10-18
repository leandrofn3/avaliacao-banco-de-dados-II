import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.get("/users", controller.index);
router.post("/users/create", controller.create);
router.delete("/users/delete/:id", controller.delete);
router.put("/users/update/:id", controller.update);

export default router;