import mongoose from "mongoose";
import BloodBank from "./models/BloodBank.js";

mongoose.connect("mongodb+srv://samkitsamsukhais23:samkit07@reelspro.z0tlf.mongodb.net/?appName=reelspro");

const seedBanks = async () => {
  await BloodBank.deleteMany({});
  await BloodBank.insertMany([
    { name: "Indira Gandhi Blood Bank", totalBeds: 20, occupiedBeds: 5 },
    { name: "Khidwai Blood Bank", totalBeds: 15, occupiedBeds: 7 },
    { name: "Red Cross Society", totalBeds: 25, occupiedBeds: 10 },
  ]);
  console.log("Database seeded");
  process.exit();
};

seedBanks();
