// subjectController.js
const Subject = require("../model/subject");

const getAllSubject = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.send(subjects);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createSubject = async (req, res) => {
  try {
    const newSubject = new Subject(req.body);
    const savedSubject = await newSubject.save();
    res.send(savedSubject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSubject = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id);
    res.send(subject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateSubject = async (req, res) => {
  try {
    const updatedSubject = await Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedSubject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteSubject = async (req, res) => {
  try {
    const deletedSubject = await Subject.findByIdAndDelete(req.params.id);
    res.send(deletedSubject);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllSubject,
  createSubject,
  getSubject,
  updateSubject,
  deleteSubject,
};