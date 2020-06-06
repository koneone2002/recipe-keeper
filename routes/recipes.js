const express = require('express');
const router = express.Router();

// @route GET api/recipes
// @ desc Get all users recipes
// @ access Private
router.get('/', (req, res) => {
  res.send('Get all recipes');
});

// @route POST api/recipes
// @ desc Add a new recipe
// @ access Private
router.post('/', (req, res) => {
  res.send('Add a recipe');
});

// @route PUT api/recipes/:id
// @ desc Update/Edit recipe
// @ access Private
router.put('/:id', (req, res) => {
  res.send('Update or edit a recipe');
});

// @route DELETE api/recipes/:id
// @ desc Delete a recipe
// @ access Private
router.delete('/:id', (req, res) => {
  res.send('Delete a recipe');
});

module.exports = router;
