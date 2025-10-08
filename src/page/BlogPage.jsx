"use client";
import { RoomCard } from "@/section/blog/BlogCard";

export default function BlogPageHome() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="w-full max-w-6xl space-y-8">
        <RoomCard
          title="Living Room"
          description="The living room is the heart of the home—a space designed for comfort, relaxation, & gathering."
          area="260 Mtr."
          feature="Bath"
          color="Brown"
          imageUrl="https://onepack.casethemes.net/wp-content/uploads/2025/07/img-blending-1-750x580.webp"
        />
        <RoomCard
          title="Dining Room"
          description="The dining room is where meals become moments—crafted for connection, sharing, and memorable conversations."
          area="250 Mtr."
          feature="Bath"
          color="Brown"
          imageUrl="https://onepack.casethemes.net/wp-content/uploads/2025/07/img-blending-2-750x580.webp"
        />
        <RoomCard
          title="Kitchen Room"
          description="The kitchen is the soul of the home—built for creativity, nourishment, and everyday inspiration."
          area="250 Mtr."
          feature="Bath"
          color="Brown"
          imageUrl="https://onepack.casethemes.net/wp-content/uploads/2025/07/img-blending-3-750x580.webp"
        />{" "}
        <RoomCard
          title="Playground"
          description="The playground is where imagination thrives—a joyful space for play, freedom, and boundless energy."
          area="250 Mtr."
          feature="Bath"
          color="Brown"
          imageUrl="https://onepack.casethemes.net/wp-content/uploads/2025/07/img-blending-3-750x580.webp"
        />
      </div>
    </main>
  );
}
