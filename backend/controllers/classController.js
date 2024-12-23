const Class = require('../model/class')  // Changed from ClassRoutes to Class

async function getAllClasses(req, res) {
    try {
        const classes = await Class.find()
        res.send(classes)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createClass(req, res) {
    try {
        const classes = new Class(req.body);
        const savedClass = await classes.save();
        res.status(201).json(savedClass);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function getClassById(req, res) {
    try {
        const classItem = await Class.findById(req.params.id)
        res.send(classItem)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateClassById(req, res) {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, {
            key: value
        }, { new: true })
        res.send(updatedClass)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteClassById(req, res) {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id)
        res.send(deletedClass)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllClasses,
    createClass,
    getClassById,
    updateClassById,
    deleteClassById
}