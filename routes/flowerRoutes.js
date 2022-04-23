// Imports
const { Router } = require('express');
const multer = require('multer');
const path = require('path');

const {
  getAllFlowers,
  addFlower,
  uploadImage,
  storaged,
  deleteFlower,
  getHousePlantFlower,
} = require('../controllers/flowerControllers');
const router = Router();

// Muter Settings

const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
});

// Routes path
router.get('/houseplant', getHousePlantFlower);
// router.post('/add', upload.single('profile'), addFlower);
router.post('/add', addFlower);
router.delete('/:id', deleteFlower);
module.exports = router;
