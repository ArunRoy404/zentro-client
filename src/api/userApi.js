import axiosSecure from "./axiosInstance";

// GET all users (Admin)
export const getAllUsers = async () => {
    const res = await axiosSecure.get("/api/v1/users");
    return res.data?.data || [];
};


// PATCH user
export const patchUser = async (updateData, id) => {
    return await axiosSecure.patch(`api/v1/users/${id}`, updateData)
}