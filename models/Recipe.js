const mongoose = require('mongoose');
const RecipeSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  ingredients: {
    type: String
  },
  directions: {
    type: String
  },
  source: {
    type: String
  },
  isArchived: {
    type: Boolean
  },
  type: {
    type: String,
    default: 'delicious'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('recipe', RecipeSchema);
