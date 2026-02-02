import { IsString, IsNotEmpty, IsNumber, Min } from "class-validator";
 
export class CrearProductoDto {
  @IsString()
  @IsNotEmpty()
  nombre!: string;
 
  @IsNumber()
  @Min(0)
  precio!: number;
 
  @IsNumber()
  @Min(0)
  stock!: number;
}
