import express from "express";
import MenuItem from "./../models/MenuItem.js";

const router = express.Router();

// post method to add menu item

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

//get method to get the menu data
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});


router.get("/:tastetype", async (req, res) => {
  try {
    const tastetype = req.params.tastetype;
    if (tastetype == "sweet" || tastetype == "spicy" || tastetype == "sour") {
      const response = await MenuItem.find({ taste: tastetype });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

//comment added to this file 

export default router;
