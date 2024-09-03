import { Router } from "express";
import {
  getCampos,
  getCampoById,
  getAllCamposByUserId,
  createCampo,
  updateCampo,
  deleteCampo,
  deleteAllCampos,
} from "../../Controllers/Campo/Campo.controller.js";
export const router = express.Router();

router.route("/campo").get(getCampos).post(createCampo).delete(deleteAllCampos);

router
  .route("/campo/:id")
  .get(getCampoById)
  .patch(updateCampo)
  .delete(deleteCampo);

router.route("/campo/user/:id").get(getAllCamposByUserId);

