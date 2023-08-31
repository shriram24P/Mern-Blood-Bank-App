const inventoryModel = require("../models/inventoryModel");

const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    // validation
    const user = await userModel.findOne({ email });
    if (!user) {
      return throw new Error("User Not Found");
    }
    if (inventoryType === "in" && user.role !== "donor") {
      return throw new Error("Not a donor account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      return throw new Error("Not a Hospital");
    }

    // save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Record Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Create Inventory API",
      error,
    });
  }
};

module.exports = { createInventoryController };
