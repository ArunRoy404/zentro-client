"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import axiosSecure from "@/api/axiosInstance";

export default function AllBlogs() {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/blog/get-all-blog");
      return res.data; // { success, count, blogs }
    },
  });

  if (isLoading) return <p className="text-center">Loading blogs...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const blogs = data?.blogs || [];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Blog Page</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <Card key={blog._id} className="p-4 space-y-2">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 text-sm">{blog.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
