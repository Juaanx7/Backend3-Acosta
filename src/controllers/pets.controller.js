import PetDTO from "../dto/Pet.dto.js";
import { petsService } from "../services/index.js";
import __dirname from "../utils/index.js";
import petModel from '../dao/models/Pet.js';

// Obtener todas las mascotas
const getAllPets = async (req, res) => {
  try {
    const pets = await petModel.find().populate('owner');
    res.status(200).json({ status: "success", payload: pets });
  } catch (error) {
    console.error('Error al obtener mascotas:', error.message);
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
};

// Crear una mascota
const createPet = async (req, res) => {
  try {
    const { name, specie, birthDate } = req.body;
    if (!name || !specie || !birthDate) {
      return res.status(400).send({ status: "error", error: "Incomplete values" });
    }

    const pet = PetDTO.getPetInputFrom({ name, specie, birthDate });
    const result = await petsService.create(pet);
    res.status(201).send({ status: "success", payload: result });
  } catch (error) {
    console.error("Error al crear mascota:", error);
    res.status(500).send({ status: "error", error: "Error al crear mascota" });
  }
};

// Actualizar una mascota
const updatePet = async (req, res) => {
  try {
    const petUpdateBody = req.body;
    const petId = req.params.pid;

    const result = await petModel.findByIdAndUpdate(petId, petUpdateBody, { new: true });

    if (!result) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    res.status(200).json({ status: "success", message: "Mascota actualizada", payload: result });
  } catch (error) {
    console.error('Error al actualizar mascota:', error.message);
    res.status(500).json({ error: 'Error al actualizar mascota' });
  }
};

// Eliminar una mascota
const deletePet = async (req, res) => {
  try {
    const petId = req.params.pid;

    const result = await petModel.findByIdAndDelete(petId);

    if (!result) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }

    res.status(200).json({ status: "success", message: "Mascota eliminada" });
  } catch (error) {
    console.error('Error al eliminar mascota:', error.message);
    res.status(500).json({ error: 'Error al eliminar mascota' });
  }
};

// Crear mascota con imagen
const createPetWithImage = async (req, res) => {
  try {
    const file = req.file;
    const { name, specie, birthDate } = req.body;

    if (!name || !specie || !birthDate || !file) {
      return res.status(400).send({ status: "error", error: "Valores incompletos o imagen faltante" });
    }

    const pet = PetDTO.getPetInputFrom({
      name,
      specie,
      birthDate,
      image: `/img/${file.filename}`  // ruta relativa
    });

    const result = await petsService.create(pet);
    res.send({ status: "success", payload: result });

  } catch (error) {
    console.error('Error al crear mascota con imagen:', error);
    res.status(500).json({ status: "error", error: "Error al crear mascota con imagen" });
  }
};

//Obetener las mascotas adoptadas
const getAdoptedPets = async (req, res) => {
  try {
    const adoptedPets = await petsService.getAdoptedPets();
    res.status(200).json({ status: "success", payload: adoptedPets });
  } catch (error) {
    console.error("Error al obtener mascotas adoptadas:", error);
    res.status(500).json({ status: "error", error: "Error al obtener mascotas adoptadas" });
  }
};

//Marcar mascota como adoptada
const markPetAsAdopted = async (req, res) => {
  const { pid } = req.params;
  try {
    const result = await petsService.markAsAdopted(pid);
    if (!result) {
      return res.status(404).send({ status: 'error', error: 'Mascota no encontrada' });
    }
    res.send({ status: 'success', payload: result });
  } catch (error) {
    console.error('Error al marcar mascota como adoptada:', error.message);
    res.status(500).send({ status: 'error', error: 'Error interno del servidor' });
  }
};

const getPetById = async (pid) => {
  const pet = await petsService.getById(pid);
  return pet;
};

// Exportación final
export default {
  getAllPets,
  createPet,
  updatePet,
  deletePet,
  createPetWithImage,
  getAdoptedPets,
  markPetAsAdopted,
  getPetById
};