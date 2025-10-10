'use client'

import ImageUpload from "@/components/ui/ImageUpload";
import { useState } from "react";


export default function Page() {
  const [imageUrl, setImageUrl] = useState("");
  const handleSuccess = (url) => {
    console.log("Uploaded image URL:", url);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Upload Image</h1>
      <div className="p-6 w-[250px] h-[200px]">
        <ImageUpload imageUrl={imageUrl} setImageUrl={setImageUrl} />
      </div>
    </div>
  );
}
