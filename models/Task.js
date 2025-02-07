const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });  // Para añadir automáticamente createdAt y updatedAt

module.exports = mongoose.model('Task', TaskSchema);
