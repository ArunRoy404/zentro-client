import axiosSecure from "./axiosInstance";

// GET all users (Admin)
export const getAllAgents = async () => {
    const res = await axiosSecure.get("/api/v1/agent");
    return res.data?.data || [];
};

