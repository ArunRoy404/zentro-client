import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import { toast } from "sonner";

// Create instance
const axiosSecure = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
    timeout: 10000,
});

// ✅ Request Interceptor — attach token automatically
axiosSecure.interceptors.request.use(
    async (config) => {
        const session = await getSession();
        const token = session?.user?.token
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ⚠️ Response Interceptor — handle errors globally
axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            toast.error("Session expired. Logging out...")
            await signOut({ callbackUrl: "/signin" });
        }
        else if (error.response?.status === 403) {
            // Token expired or invalid
            toast.error("Unauthorized Action. Logging out...")
            await signOut({ callbackUrl: "/signin" });
        }
        return Promise.reject(error);
    }
);

export default axiosSecure;
