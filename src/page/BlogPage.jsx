"use client";
import { RoomCard } from "@/section/blog/BlogCard";

export default function BlogPageHome() {
  return (
    <main className=" flex items-center justify-center bg-background">
      <div className="w-full max-w-6xl space-y-4 mt-20">
        <RoomCard
          title="Living Room"
          description="The living room is the heart of the home—a space designed for comfort, relaxation, & gathering."
          area="260 Mtr."
          feature="Bath"
          color="Brown"
          imageUrl="https://onepack.casethemes.net/wp-content/uploads/2025/07/img-blending-1-750x580.webp"
        />
     
      </div>
    </main>
  );
}
