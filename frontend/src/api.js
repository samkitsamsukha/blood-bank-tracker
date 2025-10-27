import axios from "axios";

const API_BASE =
    process.env.NODE_ENV === "production"
        ? "/api/bloodbanks"             // ✅ On Vercel
        : "http://localhost:5000/api/bloodbanks"; // ✅ Local development

export const api = axios.create({
    baseURL: API_BASE,
});
