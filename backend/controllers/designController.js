// backend/controllers/designController.js
const Design = require('../models/Design');

exports.createDesign = async (req, res) => {
  const { content } = req.body;
  try {
    const newDesign = new Design({
      user: req.user.id,
      content,
    });

    const design = await newDesign.save();
    res.json(design);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getDesigns = async (req, res) => {
  try {
    const designs = await Design.find({ user: req.user.id });
    res.json(designs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
