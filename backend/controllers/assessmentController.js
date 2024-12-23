const Assessment = require("../model/assessment");

const getAllAssessment = async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.send(assessments);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createAssessment = async (req, res) => {
  try {
    const newAssessment = new Assessment(req.body);
    const savedAssessment = await newAssessment.save();
    res.send(savedAssessment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAssessment = async (req, res) => {
  try {
    const assessment = await Assessment.findById(req.params.id);
    res.send(assessment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateAssessment = async (req, res) => {
  try {
    const updatedAssessment = await Assessment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedAssessment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteAssessment = async (req, res) => {
  try {
    const deletedAssessment = await Assessment.findByIdAndDelete(req.params.id);
    res.send(deletedAssessment);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllAssessment,
  createAssessment,
  getAssessment,
  updateAssessment,
  deleteAssessment,
};