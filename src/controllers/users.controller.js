import { usersService } from "../services/index.js";
import userModel from '../dao/models/User.js';
import petModel from "../dao/models/Pet.js";

const createUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};

const getUsersByRole = async (req, res) => {
  try {
    const role = req.params.role;
    const users = await usersService.getUsersByRole(role);
    res.send({ status: "success", payload: users });
  } catch (error) {
    console.error("Error al obtener usuarios por rol:", error);
    res.status(500).send({ status: "error", error: "Error al obtener usuarios por rol" });
  }
};

const getAllUsers = async (req, res) => {
  const users = await usersService.getAll();
  res.send({ status: "success", payload: users });
};

const getUser = async (req, res) => {
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user) return res.status(404).send({ status: "error", error: "User not found" });
  res.send({ status: "success", payload: user });
};

const updateUser = async (req, res) => {
  const updateBody = req.body;
  const userId = req.params.uid;
  const user = await usersService.getUserById(userId);
  if (!user) return res.status(404).send({ status: "error", error: "User not found" });
  const result = await usersService.update(userId, updateBody);
  res.send({ status: "success", message: "User updated" });
};

const deleteUser = async (req, res) => {
  const userId = req.params.uid;
  const result = await usersService.delete(userId); // corregí esta línea para que sí borre
  res.send({ status: "success", message: "User deleted" });
};

const getUsersWithPets = async (req, res) => {
  try {
    const users = await usersService.getUsersWithPets();
    res.status(200).json({ status: 'success', payload: users });
  } catch (error) {
    console.error('Error al obtener usuarios con mascotas:', error.message);
    res.status(500).json({ status: 'error', error: 'Error al obtener usuarios con mascotas' });
  }
};

const getUserPets = async (req, res) => {
  try {
    const { uid } = req.params;

    // Verificamos si el usuario existe
    const user = await userModel.findById(uid);
    if (!user) {
      return res.status(404).json({ status: "error", error: "Usuario no encontrado" });
    }

    // Buscamos las mascotas cuyo owner coincida con el uid
    const pets = await petModel.find({ owner: uid });

    res.status(200).json({ status: "success", payload: pets });
  } catch (error) {
    console.error("Error al obtener mascotas del usuario:", error);
    res.status(500).json({ status: "error", error: "Error interno al obtener mascotas" });
  }
};

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  getUsersByRole,
  getUsersWithPets,
  getUserPets
};