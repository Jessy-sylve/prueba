import { Router } from "express";
import { ProductoControlador } from "../controllers/ProductoControlador";

const router = Router();
const productoControlador = new ProductoControlador();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Gestión de productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   nombre:
 *                     type: string
 *                     example: "Producto ejemplo"
 *                   precio:
 *                     type: number
 *                     example: 99.99
 *       500:
 *         description: Error del servidor
 */
router.get("/", productoControlador.obtenerTodos.bind(productoControlador));

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - precio
 *               - stock
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Laptop HP"
 *               precio:
 *                 type: number
 *                 example: 899.99
 *               stock:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: "uuid-generado"
 *                 nombre:
 *                   type: string
 *                   example: "Laptop HP"
 *                 precio:
 *                   type: number
 *                   example: 899.99
 *                 stock:
 *                   type: integer
 *                   example: 10
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post("/", productoControlador.crear.bind(productoControlador));

export default router;