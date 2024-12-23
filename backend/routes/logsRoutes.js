const express = require("express");
const router = express.Router();
const {
    getAllLogs,
    createLogs,
    getLog,
    updateLog,
    deleteLog,
} = require("../controllers/logsController");

// Routes
router.get("/", getAllLogs);
router.post("/", createLogs);
router.get("/:id", getLog);
router.put("/:id", updateLog);
router.delete("/:id", deleteLog);

module.exports = router;
