import mongoose from "mongoose";

const bloodBankSchema = new mongoose.Schema({
    name: { type: String, required: true },
    totalBeds: { type: Number, required: true },
    occupiedBeds: { type: Number, default: 0 },
});

export default mongoose.model("BloodBank", bloodBankSchema);
