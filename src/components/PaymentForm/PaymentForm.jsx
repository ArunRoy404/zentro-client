"use client";

import { Elements, useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Card } from "../ui/card";
import { CreditCardIcon } from "lucide-react";
import { toast } from "sonner";
import Spinner from "../ui/Spinner";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

const PaymentFormInner = () => {

    console.log("Stripe key:", process.env.NEXT_PUBLIC_STRIPE_KEY);




    const stripe = useStripe();
    const elements = useElements();

    const [creditCard, setCreditCard] = useState({
        cardholderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
    });

    const [paymentProcessing, setPaymentProcessing] = useState(false);

    const handlePay = async () => {

        if (!stripe || !elements) return;
        const cardElement = elements.getElement(CardElement);
        if (!cardElement) return;


        setPaymentProcessing(true);

        try {
            // Create PaymentIntent on backend
            const res = await axios.post("https://zentro-server.vercel.app/api/v1/payment/create-payment-intent", {
                amountInCents: 5000,
            });
            const clientSecret = res.data.clientSecret;


            // Confirm card payment using Stripe Elements
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: creditCard.cardholderName || "Anonymous",
                    },
                },
            });


            const TrxID = result.paymentIntent.id
            console.log(TrxID);


            //here implement save records with userid or name, property id and trxID


            if (result.error) {
                toast.error(result.error.message || "Payment failed");
            } else if (result.paymentIntent?.status === "succeeded") {
                toast("Payment succeeded ✅");
            }
        } catch (err) {
            toast.error(err.message || "Something went wrong");
        } finally {
            setPaymentProcessing(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* --- Custom Card UI --- */}
            <Card
                className=
                "w-full h-52 bg-slate-800 text-white p-6 flex flex-col justify-between rounded-lg shadow-lg"
            >
                <div className="flex justify-between items-start">
                    <div className="w-12 h-8 bg-yellow-400 rounded" />
                    <CreditCardIcon className="w-8 h-8 opacity-80" />
                </div>

                <div className="space-y-4">
                    <div className="text-xl font-mono tracking-wider">
                        **** **** **** ****
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-xs opacity-70 uppercase">Card Holder</div>
                            <div className="font-medium">Your Name</div>
                        </div>
                        <div>
                            <div className="text-xs opacity-70 uppercase">Expires</div>
                            <div className="font-medium">
                                MM/YY
                            </div>
                        </div>
                    </div>
                </div>
            </Card>


            {/* --- Hidden Stripe CardElement (needed for payment) --- */}
            <div>
                <Card className='px-1 py-2 rounded-none'>
                    <CardElement />
                </Card>
            </div>

            <Button className="w-full" onClick={handlePay} disabled={paymentProcessing}>
                {paymentProcessing ? <Spinner color="white" size="8" /> : "Pay Now"}
            </Button>
        </div>
    );
};

const PaymentForm = () => (
    <div className="max-w-md mx-auto p-6">
        <Elements stripe={stripePromise}>
            <PaymentFormInner />
        </Elements>
    </div>
);

export default PaymentForm;
