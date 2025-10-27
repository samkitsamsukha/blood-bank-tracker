import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bloodBankRoutes from "./routes/bloodBankRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb+srv://samkitsamsukhais23:samkit07@reelspro.z0tlf.mongodb.net/?appName=reelspro")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Routes
app.use("/api/bloodbanks", bloodBankRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
