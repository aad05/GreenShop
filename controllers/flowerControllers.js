const flowerModel = require('../models/flowerModel');
const path = require('path');

// Method: GET  Description: Get flowers by Category

const getHousePlantFlower = async (req, res) => {
  try {
    const flowers = await flowerModel.find();

    res.status(200).json({
      message: 'success',
      data: flowers,
    });
  } catch (error) {
    console.log(error);
  }
};

// ==================================================

// Method: POST  Description: Add flower

const addFlower = async (req, res) => {
  try {
    const { name, price, discount, img, date, sale } = req.body;
    // const newFlower = await flowerModel.create({
    //   name,
    //   price,
    //   discount,
    //   img: `http://localhost:3001/profile/${req.file.filename}`,
    //   date,
    //   sale,
    // });
    flowerModel.create(req.body);

    res.status(201).json({
      message: 'success',
      data: req.body,
    });
    console.log('Sending image');
  } catch (error) {
    console.log(error);
  }
};

// Method: DELETE  Description: Delete flower

const deleteFlower = async (req, res) => {
  try {
    await flowerModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { addFlower, deleteFlower, getHousePlantFlower };
