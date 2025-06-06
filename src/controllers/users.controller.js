import { usersService } from "../services/index.js";
import userModel from '../dao/models/User.js';

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

export default {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  createUser,
  getUsersByRole
};