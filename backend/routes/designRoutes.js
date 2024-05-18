// backend/routes/designRoutes.js
const express = require('express');
const { createDesign, getDesigns, getDesignById, updateDesign, deleteDesign } = require('../controllers/designController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, createDesign);
router.get('/', authenticateToken, getDesigns);
router.get('/:id', authenticateToken, getDesignById);
router.put('/:id', authenticateToken, updateDesign);
router.delete('/:id', authenticateToken, deleteDesign);

module.exports = router;
