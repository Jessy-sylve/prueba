# ♠♠♠Examen de Arquitectura de Sotware
# Microservicio de Prueba - ms-prueba

Microservicio de prueba para el examen segundo parcial, desarrollado con **Express**, **TypeORM** y **PostgreSQL**.

## Tecnologías usadas

- **Node.js** con **TypeScript**
- **Express** - Framework de servidor
- **TypeORM** - ORM para base de datos
- **PostgreSQL** - Base de datos
- **Swagger** - Documentación de la API

## Estructura del proyecto
```
src/
├── app.ts                          # Configuración principal
├── config/
│   ├── database.ts                 # Configuración de TypeORM
│   └── swagger.ts                  # Configuración de Swagger
├── controllers/
│   └── ProductoControlador.ts      # Controlador de productos
├── dtos/
│   └── CrearProductoDto.ts         # DTO para crear producto
├── entities/
│   └── Producto.entities.ts        # Entidad Producto
├── repositories/
│   └── ProductoRepositorio.ts      # Repositorio de productos
├── routes/
│   └── ProductoRutas.ts            # Rutas de productos
└── services/
    └── ProductoServicio.ts         # Servicio de productos
```

## Configuración

1. Clonar el repositorio
```bash
git clone https://github.com/Jessy-sylve/prueba.git
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno en un archivo `.env`
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=1234
DB_NAME=prueba-examen
```

4. Iniciar el servidor en modo desarrollo
```bash
npm run dev
```

## Endpoints disponibles

| Método | Ruta         | Descripción                |
|--------|--------------|----------------------------|
| GET    | /productos   | Obtener todos los productos |
| POST   | /productos   | Crear un nuevo producto     |

## Documentación de la API

Una vez iniciado el servidor, accede a la documentación Swagger en:
```
http://localhost:3000/api-docs
```

## Autor

Sandy Mariño