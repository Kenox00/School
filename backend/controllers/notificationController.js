const Notification = require("../model/notification");

// Functions
async function getAllNotification(req, res) {
  try {
    const Notifications = await Notification.find();
    res.send(Notifications);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createNotification(req, res) {
  try {
    const newNotification = new Notification(req.body);
    const savedNotification = await newNotification.save();
    res.status(201).json(savedNotification);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getNotification(req, res) {
  try {
    const Notification = await Notification.findById(req.params.id);
    res.send(Notification);
  } catch (error) {
    res.status(500).send(error.message);
  }
}


async function updateNotification(req, res) {
  try {
    const updatedNotification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        key: value,
      },
      { new: true }
    );
    res.send(updatedNotification);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function deleteNotification(req, res) {
  try {
    const deletedNotification = await Notification.findByIdAndDelete(
      req.params.id
    );
    res.send(deletedNotification);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllNotification,
  createNotification,
  getNotification,
  updateNotification,
  deleteNotification,
};
