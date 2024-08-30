import { Router } from 'express';
import { LoginFsController,RegisterFsController } from '../../Controllers/Auth/Auth.Fs.controller.js';
const router = Router();

// Ruta para manejar el login basado en archivos
router.post('/loginFs', LoginFsController);

// Ruta para manejar el registro basado en archivos
router.post('/registerFs', RegisterFsController);

export default router;
