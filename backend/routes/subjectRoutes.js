const express = require("express");
const router = express.Router();
const {
    getAllSubject,
    createSubject,
    getSubject,
    updateSubject,
    deleteSubject,
} = require("../controllers/subjectController");


router.get("/", getAllSubject);
router.post("/", createSubject);
router.get("/:id", getSubject);
router.put("/:id", updateSubject);
router.delete("/:id", deleteSubject);

module.exports = router;
