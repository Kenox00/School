const express = require("express");
const router = express.Router();

const { protect, authorize } = require("../middleware/authMiddleware.js");
const {
  getAllTeachers,
  getTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher,
} = require("../controllers/teacherController.js");

router.get("/", protect, authorize("admin"), getAllTeachers);
router.post("/", protect, authorize("admin"), createTeacher);
router.get("/:id", protect, authorize("admin"), getTeacher);
router.put("/:id", protect, authorize("admin"), updateTeacher);
router.delete("/:id", protect, authorize("admin"), deleteTeacher);

module.exports = router;
