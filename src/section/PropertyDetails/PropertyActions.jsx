import React from "react";
import { ShoppingCart, CreditCard, Heart } from "lucide-react";

export default function PropertyActions() {
  return (
    <div className="flex gap-3 mt-6">
      <button className="flex items-center justify-center gap-2 flex-1 bg-[var(--primary)] text-[var(--background)] py-2 font-semibold hover:opacity-90 transition rounded-none">
        <Heart size={18} />
        Add to Favorite
      </button>

      <button className="flex items-center justify-center gap-2 flex-1 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--background)] py-2 font-semibold transition rounded-none">
        <CreditCard size={18} />
        Buy Now
      </button>
    </div>
  );
}
