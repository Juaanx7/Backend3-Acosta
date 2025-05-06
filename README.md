# Preentrega 1 - Backend 3

Este proyecto es la primera preentrega de **Backend 3** del curso de Desarrollador Web Full Stack.

## 💻 Descripción

Se trabajó sobre el proyecto base, agregando un router específico para generación de datos mock y pruebas de inserción en base de datos.

---

## 🔧 Funcionalidades implementadas

- Creación del router `mocks.router.js` bajo la ruta base `/api/mocks`.
- Generación de 50 usuarios simulados mediante el endpoint GET `/mockingusers`.
- Implementación del módulo de Mocking:
  - Contraseña encriptada (`coder123`).
  - Rol random (`user` / `admin`).
  - Pets vacío.
- Generación y almacenamiento en MongoDB mediante POST `/generateData`:
  - Inserción de usuarios y mascotas según parámetros enviados en el body.
- Verificación de registros mediante los endpoints GET de `users` y `pets`.

---

## ⚙ Cómo correr el proyecto

1. Clonar el repositorio:
    - git clone https://github.com/CoderContenidos/RecursosBackend-Adoptme.git


2. Instalar dependencias:
    - npm install


3. Configurar la conexión a MongoDB en `src/app.js`:
    - const connection = mongoose.connect('mongodb+srv://<user>:<password>@<cluster>.mongodb.net/adoptme?retryWrites=true&w=majority');


4. Correr el servidor:
    - npm run dev


---

## 🔥 Endpoints disponibles

- **GET** `/api/mocks/mockingusers` → Devuelve 50 usuarios simulados.
- **POST** `/api/mocks/generateData` → Inserta usuarios y mascotas en base.
- Body (JSON):
 ```json
 {
   "users": 10,
   "pets": 5
 }
 ```
- **GET** `/api/users` → Lista de usuarios.
- **GET** `/api/pets` → Lista de mascotas.

---

## 👤 Autor

- Juan Acosta Quiñones
- Curso Backend 3 - Coderhouse

