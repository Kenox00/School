const express = require("express");
const router = express.Router();
const {
    getAllMarks,
    createMarks,
    getMarks,
    updateMarks,
    deleteMarks,
} = require("../controllers/marksController");


// Routes
router.get("/", getAllMarks);
router.post("/", createMarks);
router.get("/:id", getMarks);
router.put("/:id", updateMarks);
router.delete("/:id", deleteMarks);

module.exports = router;
