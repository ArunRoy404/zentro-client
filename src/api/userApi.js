import axiosSecure from "./axiosInstance";

// GET all users (Admin)
export const getAllUsers = async () => {
    const res = await axiosSecure.get("/api/v1/users");
    return res.data?.data || [];
};
