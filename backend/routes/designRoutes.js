// backend/routes/designRoutes.js
const express = require('express');
const router = express.Router();
const { createDesign, getDesigns } = require('../controllers/designController');
const auth = require('../middleware/authMiddleware');

// @route   POST api/designs
// @desc    Create a design
// @access  Private
router.post('/', auth, createDesign);

// @route   GET api/designs
// @desc    Get all designs
// @access  Private
router.get('/', auth, getDesigns);

module.exports = router;
