const express = require('express');
const app = express();
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Routes
const userRoutes = require('./routes/userRoutes');
const parentRoutes = require('./routes/parentRoutes'); // Ensure proper initialization
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const classRoutes = require('./routes/classRoutes');
const marksRoutes = require('./routes/marksRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const assessmentRoutes = require('./routes/assessmentRoutes');
const classTeacherRoutes = require('./routes/classTeacherRoutes');
const logsRoutes = require('./routes/logsRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

// Route Connections
app.use('/api/users', userRoutes);
app.use('/api/parents', parentRoutes); // Should work without initialization issues
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/marks', marksRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/assessments', assessmentRoutes);
app.use('/api/class-teachers', classTeacherRoutes);
app.use('/api/logs', logsRoutes);
app.use('/api/subjects', subjectRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/school', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connection Succeeded.');
    app.listen(PORT, () => {
      console.log('App running in port: ' + PORT);
    });
  })
  .catch((err) => {
    console.log('Error in DB connection: ' + err);
  });
