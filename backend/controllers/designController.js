// backend/controllers/designController.js
const Design = require('../models/Design');

exports.createDesign = async (req, res) => {
  const { name, content } = req.body;

  try {
    const newDesign = new Design({ name, content, user: req.userId });
    await newDesign.save();
    res.status(201).json(newDesign);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDesigns = async (req, res) => {
  try {
    const designs = await Design.find({ user: req.userId });
    res.json(designs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDesignById = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design || design.user.toString() !== req.userId) return res.status(404).json({ error: 'Design not found' });
    res.json(design);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design || design.user.toString() !== req.userId) return res.status(404).json({ error: 'Design not found' });

    design.name = req.body.name || design.name;
    design.content = req.body.content || design.content;
    await design.save();

    res.json(design);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteDesign = async (req, res) => {
  try {
    const design = await Design.findById(req.params.id);
    if (!design || design.user.toString() !== req.userId) return res.status(404).json({ error: 'Design not found' });

    await design.remove();
    res.json({ message: 'Design deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
