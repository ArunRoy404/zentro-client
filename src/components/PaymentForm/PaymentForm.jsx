"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard } from "./Credit-Card";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const PaymentForm = () => {
    const [creditCard, setCreditCard] = useState({
        cardholderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        cvvLabel: "CVC",
    });

    const handlePay = () => {
        console.log("Payment data:", creditCard);
        // call your backend or Stripe API here
    };

    return (
        <div className="max-w-md mx-auto space-y-6 p-6">
            <Elements stripe={stripePromise}>
                <CreditCard value={creditCard} onChange={setCreditCard} />
                <Button className="w-full" onClick={handlePay}>
                    Pay Now
                </Button>
            </Elements>
        </div>
    );
};

export default PaymentForm;
