const express = require("express");
const router = express.Router();
const {
  getAllParents,  // Changed from getAllParentRoutess
  createParent,   // Changed from createParentRoutes
  getParentById,  // Changed from getParentRoutesById
  updateParentById, // Changed from updateParentRoutesById
  deleteParentById, // Changed from deleteParentRoutesById
} = require("../controllers/parentController");

const { protect, authorize } = require("../middleware/authMiddleware.js");

// Get all Parents
router.get("/", protect, authorize("admin"), getAllParents);

// Create a new Parent
router.post("/", protect, authorize("admin"), createParent);

// Get Parent By ID
router.get("/:id", protect, authorize("admin"), getParentById);

// Update Parent By ID
router.put("/:id", protect, authorize("admin"), updateParentById);

// Delete Parent By ID
router.delete("/:id", protect, authorize("admin"), deleteParentById);

module.exports = router;