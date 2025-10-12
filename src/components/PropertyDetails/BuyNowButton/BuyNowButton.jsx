"use client";

import React from "react";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function BuyNowButton({ propertyId }) {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push(`/checkout/${propertyId}`);
  };

  return (
    <Button
      variant="outline"
      className="flex-1 flex items-center justify-center gap-2 rounded-none"
      onClick={handleBuyNow}
    >
      <CreditCard size={18} />
      Buy Now
    </Button>
  );
}
