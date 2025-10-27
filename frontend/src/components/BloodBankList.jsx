import React, { useEffect, useState } from "react";
import { api } from "../api";
import UpdateForm from "./UpdateForm";

const BloodBankList = () => {
    const [banks, setBanks] = useState([]);

    const fetchBanks = async () => {
        const res = await api.get("/");
        setBanks(res.data);
    };

    useEffect(() => {
        fetchBanks();
        const interval = setInterval(fetchBanks, 3000); // refresh every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>🩸 Live Blood Bank Bed Availability</h2>
            {banks.map((bank) => (
                <div key={bank._id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                    <h3>{bank.name}</h3>
                    <p>Total Beds: {bank.totalBeds}</p>
                    <p>Occupied Beds: {bank.occupiedBeds}</p>
                    <p>Available Beds: {bank.totalBeds - bank.occupiedBeds}</p>
                    <UpdateForm id={bank._id} current={bank.occupiedBeds} refresh={fetchBanks} />
                </div>
            ))}
        </div>
    );
};

export default BloodBankList;
