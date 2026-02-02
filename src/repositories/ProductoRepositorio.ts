import { AppDataSource } from "../config/database";
import { Producto } from "../entities/Producto.entities";
 
export const ProductoRepositorio = AppDataSource.getRepository(Producto);