# ��� Microservice Template – Node.js + Express + TypeScript

Plantilla base optimizada para crear **microservicios rápidamente**, ideal para **exámenes de Arquitectura de Software**, proyectos académicos y práctica profesional.

---

## ⚡ Características

- ✅ Estructura de carpetas predefinida
- ✅ TypeScript configurado y optimizado
- ✅ Express + TypeORM
- ✅ Swagger integrado
- ✅ Validaciones con class-validator
- ✅ Configuración lista para MySQL o PostgreSQL
- ✅ .gitignore y .env.example incluidos

---

## ��� ¿Qué incluye?

### ��� Archivos de configuración

- `tsconfig.json` – Configuración TypeScript
- `package.json` – Dependencias base
- `.gitignore` – Archivos ignorados por Git
- `.env.example` – Variables de entorno
- `README.template.md` – Plantilla de documentación

---

### ��� Estructura de carpetas

```text
src/
├── config/        # Configuración (database, swagger)
├── entities/      # Entidades TypeORM
├── dtos/          # Data Transfer Objects
├── repositories/  # Repository Pattern
├── services/      # Lógica de negocio
├── controllers/   # Controladores HTTP
├── routes/        # Definición de rutas
├── clients/       # Clientes HTTP externos
├── middlewares/   # Middlewares personalizados
└── utils/         # Utilidades
��� Uso rápido (modo examen)
1️⃣ Clonar la plantilla
git clone https://github.com/Wladyes/microservice-template-minimal.git mi-microservicio
cd mi-microservicio
rm -rf .git
2️⃣ Actualizar package.json
{
  "name": "mi-microservicio",
  "description": "Descripción de mi proyecto"
}
3️⃣ Instalar dependencias base
npm install
4️⃣ Instalar driver de base de datos
MySQL

npm install mysql2
PostgreSQL

npm install pg
npm install -D @types/pg
5️⃣ Configurar variables de entorno
cp .env.example .env
Editar .env con las credenciales.

6️⃣ Crear la base de datos
-- MySQL
CREATE DATABASE mi_database;

-- PostgreSQL
CREATE DATABASE mi_database;
7️⃣ Empezar a codificar ���
Carpetas clave:

src/entities/

src/dtos/

src/repositories/

src/services/

src/controllers/

src/routes/

src/config/database.ts

src/config/swagger.ts

src/app.ts

��� Dependencias incluidas
Producción
express

typeorm

reflect-metadata

class-validator

class-transformer

dotenv

axios

swagger-jsdoc

swagger-ui-express

Desarrollo
typescript

ts-node

nodemon

@types/*

⏱️ Tiempo ahorrado
TareaSin plantillaCon plantilla
Crear carpetas5 min0 min
package.json 10 min1 min
npm install3 min3 min
tsconfig.json 5 min0 min
.gitignore 2 min0 min
.env.example 3 min0.5 min
Total28 min4.5 min
Ahorro total: 23.5 minutos

��� Casos de uso
Exámenes de Arquitectura de Software

Proyectos académicos

Práctica personal

��� Patrones recomendados
Repository Pattern

Service Layer

DTO Pattern

Dependency Injection

��� Personalización
Cambiar puerto en .env:

PORT=3000
Agregar dependencias:

npm install nombre-paquete
��� Licencia
Dominio público – uso libre con fines educativos.
