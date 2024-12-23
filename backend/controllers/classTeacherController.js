const classTeacher = require('../model/teacher');

const getAllClassTeacher = async (req, res) => {
    try {
        const classTeacher = await classTeacher.find();
        res.send(classTeacher);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createClassTeacher = async (req, res) => {
    try {
        const  newClassTeacher = new classTeacher(req.body);
        const savedClassTeacher = await newClassTeacher.save();
        res.send(savedClassTeacher);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getClassTeacher = async (req, res) => {
    try {
        const classTeacher = await classTeacher.findById(req.params.id);
        res.send(classTeacher);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateClassTeacher = async (req, res) => {
    try {
        const updatedClassTeacher = await classTeacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedClassTeacher);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteClassTeacher = async (req, res) => {
    try {
        const deletedClassTeacher = await classTeacher.findByIdAndDelete(req.params.id);
        res.send(deletedClassTeacher);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    getAllClassTeacher,
    createClassTeacher,
    getClassTeacher,
    updateClassTeacher,
    deleteClassTeacher,
};