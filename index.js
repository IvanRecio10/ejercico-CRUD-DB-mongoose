const express = require('express');
const connectDB = require('./config/config');
const tasksRoutes = require('./routes/tasks');
require('dotenv').config(); 

const app = express();

app.use(express.json());

connectDB

app.use('/api/tasks', tasksRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
