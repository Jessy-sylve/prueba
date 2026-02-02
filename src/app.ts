import express from "express";
import productoRutas from "./routes/ProductoRutas";
import { setupSwagger } from "./config/swagger";
import { AppDataSource } from "./config/database";
import "reflect-metadata";

const app = express();

app.use(express.json());

// Configurar Swagger
setupSwagger(app);

app.use("/productos", productoRutas);

// Iniciar servidor SOLO después de conectar a la base de datos
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Base de datos conectada exitosamente");
    
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📚 Swagger disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch((error) => {
    console.error("❌ Error conectando a la base de datos:", error);
    process.exit(1);
  });

export default app;
