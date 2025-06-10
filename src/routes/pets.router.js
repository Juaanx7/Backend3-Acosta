import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = Router();

router.post('/', petsController.createPet);
router.get('/', petsController.getAllPets);
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);
router.get('/adopted', petsController.getAdoptedPets);
router.put('/:pid/adopt', petsController.markPetAsAdopted);

// Obtener imagen de una mascota
router.get('/:pid/image', async (req, res) => {
  try {
    const { pid } = req.params;
    const pet = await petsController.getPetById(pid);

    if (!pet || !pet.image) {
      return res.status(404).json({ status: "error", error: "Imagen no encontrada para esta mascota" });
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const imagePath = path.join(__dirname, '..', 'public', 'img', path.basename(pet.image));

    // Verificamos si el archivo realmente existe
    if (!fs.existsSync(imagePath)) {
      return res.status(404).json({ status: "error", error: "Archivo de imagen no encontrado" });
    }

    res.sendFile(imagePath);
  } catch (error) {
    console.error('Error al obtener imagen de la mascota:', error);
    res.status(500).json({ status: "error", error: "Error al obtener imagen de la mascota" });
  }
});

export default router;