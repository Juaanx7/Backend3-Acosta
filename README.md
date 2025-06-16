# Entrega final - Backend 3

Este es el proyecto final de la cursada **Backend 3** en CoderHouse, donde se aplican conceptos avanzados de desarrollo backend utilizando **Node.js**, **Express**, **MongoDB**, **Swagger**, **DTOs**, **DAOs**, **Repository Pattern**, y más.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Multer (carga de imágenes)
- Swagger (documentación)
- Docker (opcional)
- Postman (testing de endpoints)
- JavaScript ESModules

---

## 📁 Estructura del proyecto

```bash
src/
│
├── controllers/
├── dao/
├── dto/
├── middlewares/
├── models/
├── public/               # Imágenes subidas por usuarios
├── routes/
├── services/
├── utils/
├── app.js
└── server.js

---

🔧 Cómo instalar y correr el proyecto

Clonar el repositorio:
git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
cd TU_REPOSITORIO

Instalar dependencias:
npm install

Crear un archivo .env con tu conexión a MongoDB Atlas o local:
PORT=8080
MONGO_URL=mongodb+srv://usuario:password@cluster.mongodb.net/nombreDB

Ejecutar el servidor:
npm run dev
📘 Documentación de la API

Una vez iniciado el servidor, podés acceder a la documentación Swagger en:
http://localhost:8080/api/docs

🧪 Funcionalidades implementadas
Gestión completa de usuarios (CRUD)
Gestión de mascotas (CRUD)
Relación entre usuarios y mascotas
Subida de imágenes de mascotas
Endpoint para obtener mascotas adoptadas
Endpoint para marcar una mascota como adoptada
Documentación Swagger de todos los endpoints
Uso de DTOs para estructura de datos
Arquitectura profesional con DAO / Repository / Service


## 👤 Autor

- Juan Acosta Quiñones
- Curso Backend 3 - Coderhouse

