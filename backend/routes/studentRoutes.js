const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController.js');
const { protect, authorize } = require("../middleware/authMiddleware.js");

router.get('/', protect, authorize("admin"),studentController.getAllStudents);
router.get('/:id', protect, authorize("admin"),studentController.getStudent);
router.post('/', protect,authorize("admin"), studentController.createStudent);
router.put('/:id', protect, authorize("admin"),studentController.updateStudent);
router.delete('/:id', protect, authorize("admin"),studentController.deleteStudent);
router.get('/:id/marks', protect, authorize("admin"),studentController.getStudentMarks);

module.exports = router