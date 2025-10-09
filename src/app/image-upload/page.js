'use client'

import ImageUpload from "@/components/ui/ImageUpload";


export default function Page() {
  const handleSuccess = (url) => {
    console.log("Uploaded image URL:", url);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Upload Image</h1>
      <ImageUpload width={250} height={200} onUploadSuccess={handleSuccess} />
    </div>
  );
}
