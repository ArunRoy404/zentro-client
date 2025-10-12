import AddToCartButton from "@/components/shared/AddCartButton/AddCartButton";
import BuyNowButton from "@/components/shared/BuyNowButton";

export default function PropertyActions({ propertyId }) {
  return (
    <div className="flex gap-3 mt-6">
      <AddToCartButton propertyId={propertyId} />
      <BuyNowButton propertyId={propertyId} />
    </div>
  );
}