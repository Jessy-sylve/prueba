import { ProductoRepositorio } from "../repositories/ProductoRepositorio";
import { CrearProductoDto } from "../dtos/CrearProductoDto";
import { Producto } from "../entities/Producto.entities"
 
export class ProductoServicio {
  async crearProducto(dto: CrearProductoDto): Promise<Producto> {
    const producto = ProductoRepositorio.create(dto);
    return await ProductoRepositorio.save(producto);
  }
 
  async obtenerTodosLosProductos(): Promise<Producto[]> {
    return await ProductoRepositorio.find();
  }
}