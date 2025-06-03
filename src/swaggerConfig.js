import swaggerJSDoc from 'swagger-jsdoc';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolución compatible con ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Adoptme API - Backend 3',
      version: '1.0.0',
      description: 'Documentación de la API de usuarios',
    },
  },
  apis: [path.join(__dirname, './routes/*.js')], // ✅ Usa ruta absoluta
};

export const swaggerSpecs = swaggerJSDoc(swaggerOptions);