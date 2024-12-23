const Teacher = require('../model/Teacher');

const getAllTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.status(200).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getTeacher = async (req, res) => {
    try {
        const teacher = await Teacher.findById(req.params.id);
        if (!teacher) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json(teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createTeacher = async (req, res) => {
    try {
        const teacher = new Teacher(req.body);
        const savedTeacher = await teacher.save();
        res.status(201).json(savedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTeacher = async (req, res) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedTeacher) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json(updatedTeacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteTeacher = async (req, res) => {
    try {
        const deltedTeacher = await Teacher.findByIdAndDelete(req.params.id);
        if (!deltedTeacher) return res.status(404).json({ message: 'Teacher not found' });
        res.status(200).json({ message: 'Teacher deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllTeachers,
    getTeacher,
    createTeacher,
    updateTeacher,
    deleteTeacher,
};


