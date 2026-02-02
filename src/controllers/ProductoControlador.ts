import { Request, Response } from "express";
import { ProductoServicio } from "../services/ProductoServicio";
 
export class ProductoControlador {
  private productoServicio = new ProductoServicio();
 
  async crear(req: Request, res: Response): Promise<void> {
    try {
      const producto = await this.productoServicio.crearProducto(req.body);
      res.status(201).json(producto);
    } catch (error: any) {
      res.status(400).json({ mensaje: error.message });
    }
  }
 
  async obtenerTodos(req: Request, res: Response): Promise<void> {
    const productos = await this.productoServicio.obtenerTodosLosProductos();
    res.status(200).json(productos);
  }
}