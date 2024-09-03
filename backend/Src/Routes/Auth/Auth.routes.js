import { Router } from "express";
<<<<<<< HEAD
import { LogOutControllerSession,RegisterControllerSession,LoginControllerSession } from "../../Controllers/Auth/Auth.controller.js";
import User from '../../DTO/Models/Users/User.model.js'
=======
import {
  LogOutControllerSession,
  RegisterControllerSession,
  LoginControllerSession,
} from "../../Controllers/Auth/Auth.controller.js";
import Clima from "../Clima.routes.js";
>>>>>>> fb3b3a4c550e7bd6f9b2435fc28461997893de6c

const router = Router();

<<<<<<< HEAD
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type:object
 *      properties:
 *        email:
 *         type:string
 *         description:email user
 *        nombre:
 *         type:string
 *         description:name user
 *        apellido:
 *          type:string
 *          description:apellido user   
 *        password:   
 *          type:string
 *          description:password user
 *      required
 *       - email
 *       - nombre
 *       - apellido
 *       - password
 *      example 
 *       email:orozco@gmail.com           
 *       nombre:rafael
 *       apellido:orozco
 *       password:12345678
 * 
 */

/**
 * @swagger
 * /api/doc/login:
 *   post:
 *     summary: Iniciar sesión del usuario
 *     description: Endpoint para que un usuario inicie sesión.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario autenticado correctamente.
 *       401:
 *         description: Credenciales inválidas.
 */
router.post("/login",LoginControllerSession)

/**
 * @swagger
 * /api/doc//register:
 *   post:
 *     summary: Registro de usuario
 *     description: Endpoint para registrar un nuevo usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post("/register",RegisterControllerSession)

/**
 * @swagger
 * /api/doc//logOut:
 *   delete:
 *     summary: Cerrar sesión del usuario
 *     description: Endpoint para cerrar la sesión de un usuario.
 *     responses:
 *       200:
 *         description: Sesión cerrada correctamente.
 *       401:
 *         description: Usuario no autenticado.
 */
router.delete("/logOut",LogOutControllerSession)



export default router;
=======
router.post("/login", LoginControllerSession);
router.post("/register", RegisterControllerSession);
router.delete("/logOut", LogOutControllerSession);
router.get("/clima", Clima);

export default router;
>>>>>>> fb3b3a4c550e7bd6f9b2435fc28461997893de6c
