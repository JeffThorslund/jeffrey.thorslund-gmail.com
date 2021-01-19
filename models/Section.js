const mongoose = require('mongoose');

const { Schema } = mongoose;

// Create River Schema
const SectionSchema = new Schema({
  name: {
    type: 'String',
    required: true,
  },
  sections: ['Mixed'],
});

module.exports = Section = mongoose.model('Section', SectionSchema);
