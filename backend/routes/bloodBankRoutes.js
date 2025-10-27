import express from "express";
import BloodBank from "../models/BloodBank.js";

const router = express.Router();

// Get all blood banks
router.get("/", async (req, res) => {
    const banks = await BloodBank.find();
    res.json(banks);
});

// Update occupied beds
router.put("/:id", async (req, res) => {
    const { occupiedBeds } = req.body;
    const bank = await BloodBank.findByIdAndUpdate(
        req.params.id,
        { occupiedBeds },
        { new: true }
    );
    res.json(bank);
});

export default router;
