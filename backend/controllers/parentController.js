// parentController.js
const Parent = require("../model/parent");

const getAllParents = async (req, res) => {
  try {
    const parents = await Parent.find();
    res.send(parents);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createParent = async (req, res) => {
  try {
    const newParent = new Parent(req.body);
    const savedParent = await newParent.save();
    res.send(savedParent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getParentById = async (req, res) => {
  try {
    const parent = await Parent.findById(req.params.id);
    res.send(parent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateParentById = async (req, res) => {
  try {
    const updatedParent = await Parent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedParent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteParentById = async (req, res) => {
  try {
    const deletedParent = await Parent.findByIdAndDelete(req.params.id);
    res.send(deletedParent);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllParents,
  createParent,
  getParentById,
  updateParentById,
  deleteParentById,
};