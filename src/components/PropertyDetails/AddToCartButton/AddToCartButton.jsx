"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast } from "sonner";

export default function AddToCartButton({ propertyId }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = async () => {
    if (!session) {
      toast.warning("Please login to add property to cart");
      return;
    }

    setLoading(true);
    const payload = {
      userId: session.user._id,
      email: session.user.email,
      propertyId,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/addToCart",
        payload
      );

      if (res.data.success) {
        toast.success("Property added to cart successfully!");
      } else {
        toast.error(res.data.message || "Failed to add property to cart");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      disabled={loading}
      variant="default"
      className="flex-1 flex items-center justify-center gap-2 rounded-none"
      onClick={handleAddToCart}
    >
      <ShoppingCart size={18} />
      Add to Cart
    </Button>
  );
}
