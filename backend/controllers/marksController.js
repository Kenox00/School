const Marks = require('../model/marks');

// Functions
const getAllMarks = async (req, res) => {
    try {
        const Marks = await Marks.find();
        res.send(Marks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createMarks = async (req, res) => {
    try {
        let newMarks = new Marks(req.body);
        const savedMarks = await newMarks.save()
        res.send(savedMarks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getMarks = async (req, res) => {
    try {
        const Marks = await Marks.findById(req.params.id);
        res.send(Marks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateMarks = async (req, res) => {
    try {
        const updatedMarks = await Marks.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedMarks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteMarks = async (req, res) => {
    try {
        const deletedMarks = await Marks.findByIdAndDelete(req.params.id);
        res.send(deletedMarks);
    } catch (error) {
        res.status(500).send(error.message);
    }
};



module.exports = {
    getAllMarks,
    createMarks,
    getMarks,
    updateMarks,
    deleteMarks,
};