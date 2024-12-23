const express = require("express");
const router = express.Router();
const {
  getAllClassTeacher,
  createClassTeacher,
  getClassTeacher,
  updateClassTeacher,
  deleteClassTeacher,
} = require("../controllers/classTeacherController");

router.get("/", getAllClassTeacher);
router.post("/", createClassTeacher);
router.get("/:id", getClassTeacher);
router.put("/:id", updateClassTeacher);
router.delete("/:id", deleteClassTeacher);

module.exports = router;
