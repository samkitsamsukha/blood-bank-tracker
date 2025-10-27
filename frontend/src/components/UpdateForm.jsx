import React, { useState } from "react";
import { api } from "../api.js";  // ✅ import axios instance

const UpdateForm = ({ id, current, refresh }) => {
    const [occupiedBeds, setOccupiedBeds] = useState(current);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.put(`/${id}`, { occupiedBeds }); // ✅ uses correct base URL
        refresh();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Occupied Beds: </label>
            <input
                type="number"
                value={occupiedBeds}
                onChange={(e) => setOccupiedBeds(Number(e.target.value))}
                min="0"
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateForm;
