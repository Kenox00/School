// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const { Signup, Login } = require("../controllers/userController.js");
const { protect, authorize } = require("../middleware/authMiddleware.js");

// Public routes
router.post("/signup", Signup);
router.post("/login", Login);

// Admin routes
router.post("/admin/manage-teachers", protect, authorize("admin"), (req, res) => {
    res.status(200).json({ message: "Teacher management for admin" });
});

// Teacher routes
router.get("/teacher/classes", protect, authorize("teacher"), (req, res) => {
    res.status(200).json({ message: "Access to teacher's classes" });
});

// Parent routes
router.get("/parent/child-records", protect, authorize("parent"), (req, res) => {
    res.status(200).json({ message: "Access to child records" });
});

module.exports = router;
