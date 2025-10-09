"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Loader2, ImageIcon, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils"; // optional helper
import { uploadImageToImageBB } from "@/lib/uploadImage";

export default function ImageUpload({ width = 200, height = 200, onUploadSuccess }) {
  const [status, setStatus] = useState("idle"); // idle | uploading | success | error
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus("uploading");
    setError("");

    try {
      const res = await uploadImageToImageBB(file);
      const url = res?.data?.data?.url;
      if (url) {
        setImageUrl(url);
        setStatus("success");
        onUploadSuccess?.(url);
      } else {
        throw new Error("Upload failed");
      }
    } catch {
      setError("Failed to upload image. Please try again.");
      setStatus("error");
    }
  };

  const handleClick = () => {
    if (status === "uploading") return; // prevent multiple uploads
    document.getElementById("imageInput").click();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "relative flex items-center justify-center border-2 border-dashed cursor-pointer transition-colors overflow-hidden",
          status === "error"
            ? "border-red-500"
            : "border-muted-foreground/30 hover:border-primary"
        )}
        style={{ width, height }}
        onClick={handleClick}
      >
        {/* Hidden input */}
        <Input
          id="imageInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* State Views */}
        {status === "idle" && (
          <div className="flex flex-col items-center text-muted-foreground">
            <ImageIcon className="w-10 h-10" />
            <p className="text-xs mt-1">Click to upload</p>
          </div>
        )}

        {status === "uploading" && <Loader2 className="w-6 h-6 animate-spin text-primary" />}

        {status === "success" && imageUrl && (
          <img
            src={imageUrl}
            alt="Uploaded"
            className="object-cover w-full h-full rounded-xl"
          />
        )}

        {status === "error" && (
          <div className="flex flex-col items-center text-red-500">
            <AlertCircle className="w-6 h-6" />
            <p className="text-xs mt-1">Tap to reupload</p>
          </div>
        )}
      </div>
    </div>
  );
}
