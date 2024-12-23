const express = require("express");
const router = express.Router();
const {
  getAllAssessment,
  createAssessment,
  getAssessment,
  updateAssessment,
  deleteAssessment,
} = require("../controllers/assessmentController");



router.get("/", getAllAssessment);
router.post("/", createAssessment);
router.get("/:id", getAssessment);
router.put("/:id", updateAssessment);
router.delete("/:id", deleteAssessment);

module.exports = router;
