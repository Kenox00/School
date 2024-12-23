const Student = require('../model/student');

const studentController = {
    getAllStudents: async (req, res) => {
        try {
            const students = await Student.find();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getStudent: async (req, res) => {
        try {
            const student = await Student.findById(req.params.id);
            if (!student) return res.status(404).json({ message: 'Student not found' });
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createStudent: async (req, res) => {
        try {
            const student = new Student(req.body);
            const savedStudent = await student.save();
            res.status(201).json(savedStudent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    updateStudent: async (req, res) => {
        try {
            const updatedStudent = await Student.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedStudent) return res.status(404).json({ message: 'Student not found' });
            res.status(200).json(updatedStudent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteStudent: async (req, res) => {
        try {
            const student = await Student.findByIdAndDelete(req.params.id);
            if (!student) return res.status(404).json({ message: 'Student not found' });
            res.status(200).json({ message: 'Student deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getStudentMarks: async (req, res) => {
        try {
            const marks = await Mark.find({ studentId: req.params.id });
            res.status(200).json(marks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = studentController;