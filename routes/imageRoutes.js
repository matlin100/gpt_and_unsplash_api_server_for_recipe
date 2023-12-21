const express = require('express');
const router = express.Router();
const upload = require('../utils/multerConfig'); // Use the configured Multer instance
const { analyzeImage } = require('../services/visionService');

router.post('/analyze-image', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    const descriptions = await analyzeImage(req.file.buffer);
    res.json({ descriptions });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error processing image');
  }
});

module.exports = router;
