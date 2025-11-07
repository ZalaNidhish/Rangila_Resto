const express = require("express");
const router = express.Router();
const Item = require("../models/menuitems");

// Add Item
router.post("/additem", async (req, res) => {
  const { itemName, itemPrice, itemDescription } = req.body;
  try {
    const newItem = new Item({
      name: itemName,
      price: itemPrice,
      description: itemDescription,
    });
    await newItem.save();
    res.status(201).json({ success: true, message: "Item added successfully" });
  } catch (error) {
    res.status(501).json({ success: false, message: "Failed to add item" });
  }
});

router.post("/searchitem", async (req, res) => {
  const { itemName } = req.body;
  try {
    const item = await Item.findOne({ name: itemName });
    if (item) {
      res
        .status(200)
        .json({
          success: true,
          id: item._id,
          name: item.name,
          price: item.price,
          description: item.description,
        });
    } else {
      res.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to search item" });
  }
});

router.post("/edititem", async (req, res) => {
  const { id, name, price, description } = req.body;
  try {
    const item = await Item.findById(id);
    if (item) {
      console.log("item found");
      item.name = name;
      item.price = price;
      item.description = description;
      await item.save();
      console.log("item updated");
      res.status(200).json({ success: true, item });
    } else {
      res.status(404).json({ success: false, message: "Item not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to edit item" });
  }
});

router.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.get("/availableitems", async (req, res) => {
  const items = await Item.find({ isAvailable: true });
  res.json(items);
});

router.post("/availableitems", async (req, res) => {
  const { items } = req.body;
  try {
    // First, set all items to unavailable
    await Item.updateMany({}, { isAvailable: false });
    console.log("All items set to unavailable");
    
    // Then, set selected items to available
    await Item.updateMany({ name: { $in: items } }, { isAvailable: true });
    res
      .status(200)
      .json({ success: true, message: "Available items updated" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to update available items" });
  }
  console.log("process over");
  
});

module.exports = router;
