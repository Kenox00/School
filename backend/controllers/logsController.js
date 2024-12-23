const Logs = require("../model/logs");

// Funcitons
async function getAllLogs(req, res) {
  try {
    const Logs = await Logs.find();
    res.send(Logs);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createLogs(req, res) {
  try {
    let newLogs = new Logs({
      key: value,
    });
    const savedLogs = await newLogs.save();
    res.send(savedLogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getLog(req, res) {
  try {
    const Log = await Logs.findById(req.params.id);
    res.send(Log);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function updateLog(req, res) {
  try {
    const updatedLogs = await Logs.findByIdAndUpdate(
      req.params.id,
      {
        key: value,
      },
      { new: true }
    );
    res.send(updatedLogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteLog(req, res) {
  try {
    const deletedLogs = await Logs.findByIdAndDelete(req.params.id);
    res.send(deletedLogs);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllLogs,
  createLogs,
  getLog,
  updateLog,
  deleteLog,
};
