import { Router } from "express";
import {
  LogOutControllerSession,
  RegisterControllerSession,
  LoginControllerSession,
} from "../../Controllers/Auth/Auth.controller.js";
import Clima from "../Clima.routes.js";

const router = Router();

router.post("/login", LoginControllerSession);
router.post("/register", RegisterControllerSession);
router.delete("/logOut", LogOutControllerSession);
router.get("/clima", Clima);

export default router;
