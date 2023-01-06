const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Shirts",
  },
  {
    category_name: "Shorts",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () =>
  Category.bulkCreate(categoryData).catch((err) => {
    console.log(err);
    // res.status(500).json(err);
  });

module.exports = seedCategories;
