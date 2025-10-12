import AddToCartButton from "@/components/PropertyDetails/AddToCartButton/AddToCartButton";
import BuyNowButton from "@/components/PropertyDetails/BuyNowButton/BuyNowButton";
import React from "react";

export default function PropertyActions({ propertyId }) {
  return (
    <div className="flex gap-3 mt-6">
      <AddToCartButton propertyId={propertyId} />
      <BuyNowButton propertyId={propertyId} />
    </div>
  );
}
