import userModel from "../dao/models/User.js";

const getAll = async () => {
  return await userModel.find();
};

const getUserById = async (id) => {
  return await userModel.findById(id);
};

const update = async (id, updateData) => {
  return await userModel.findByIdAndUpdate(id, updateData, { new: true });
};

const remove = async (id) => {
  return await userModel.findByIdAndDelete(id);
};

const create = async (userData) => {
  return await userModel.create(userData);
};

const getUsersByRole = async (role) => {
  return await userModel.find({ role });
};

export default {
  getAll,
  getUserById,
  update,
  remove,
  create,
  getUsersByRole
};