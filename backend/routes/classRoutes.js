const express = require("express");
const router = express.Router();
const { protect, authorize } = require("../middleware/authMiddleware.js");
const {
  getAllClasses,    // Changed from getAllClassRoutes
  createClass,      // Changed from createClassRoutes
  getClassById,     // Changed from getClassRoutesById
  updateClassById,  // Changed from updateClassRoutesById
  deleteClassById,  // Changed from deleteClassRoutesById
} = require("../controllers/classController");

router.get("/", protect, authorize("admin"), getAllClasses);
router.post("/", protect, authorize("admin"), createClass);
router.get("/:id", protect, authorize("admin"), getClassById);
router.put("/:id", protect, authorize("admin"), updateClassById);
router.delete("/:id", protect, authorize("admin"), deleteClassById);

module.exports = router;