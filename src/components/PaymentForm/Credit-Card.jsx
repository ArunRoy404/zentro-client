import * as React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { CreditCard as CreditCardIcon, Lock } from "lucide-react";

// Luhn Algorithm to validate card number
const isValidCardNumber = (number) => {
    const digits = number.replace(/\s/g, "").split("").reverse().map(d => parseInt(d));
    if (digits.some(isNaN)) return false;

    const sum = digits.reduce((acc, d, i) => {
        if (i % 2 !== 0) {
            d *= 2;
            if (d > 9) d -= 9;
        }
        return acc + d;
    }, 0);

    return sum % 10 === 0 && digits.length >= 13 && digits.length <= 16;
};

export const CreditCard = React.forwardRef(({ value, onChange, className }, ref) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const cvvInputRef = useRef(null);

    const currentValue = value || {
        cardholderName: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: "",
        cvvLabel: "CVC",
    };

    const handleInputChange = (field, newValue) => {
        const updatedValue = { ...currentValue, [field]: newValue };
        onChange?.(updatedValue);
    };

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
        const parts = [];
        for (let i = 0; i < v.length; i += 4) parts.push(v.substring(i, i + 4));
        return parts.join(" ");
    };

    const handleCardNumberChange = (e) => {
        const formatted = formatCardNumber(e.target.value);
        handleInputChange("cardNumber", formatted);
    };

    const handleCvvFocus = () => { setIsFlipped(true); setFocusedField("cvv"); };
    const handleCvvBlur = () => { setIsFlipped(false); setFocusedField(null); };

    const cardType = currentValue.cardNumber.startsWith("3") ? "amex" : "generic";
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 20 }, (_, i) => (currentYear + i).toString());
    const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0"));

    // --- Validation ---
    const cardNumberValid = isValidCardNumber(currentValue.cardNumber);
    const expiryValid =
        currentValue.expiryMonth &&
        currentValue.expiryYear &&
        new Date(`${currentValue.expiryYear}-${currentValue.expiryMonth}-01`) > new Date();
    const cvvValid =
        currentValue.cvv.length === (cardType === "amex" ? 4 : 3);

    const allValid = cardNumberValid && expiryValid && cvvValid && currentValue.cardholderName;

    return (
        <div ref={ref} className={cn("w-full mx-auto", className)}>
            {/* --- Card Preview --- */}
            <div className="relative h-56 mb-6 perspective-1000">
                <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front Side */}
                    <Card className={cn(
                        "absolute inset-0 w-full h-full bg-slate-800 text-white p-6 flex flex-col justify-between backface-hidden",
                        !allValid && "opacity-80" // subtle visual if invalid
                    )}>
                        <div className="flex justify-between items-start">
                            <div className="w-12 h-8 bg-yellow-400 rounded" />
                            <CreditCardIcon className="w-8 h-8 opacity-80" />
                        </div>
                        <div className="space-y-4">
                            <div className="text-xl font-mono tracking-wider">
                                {currentValue.cardNumber || "•••• •••• •••• ••••"}
                            </div>
                            <div className="flex justify-between items-end">
                                <div>
                                    <div className="text-xs opacity-70 uppercase">Card Holder</div>
                                    <div className="font-medium">{currentValue.cardholderName || "YOUR NAME"}</div>
                                </div>
                                <div>
                                    <div className="text-xs opacity-70 uppercase">Expires</div>
                                    <div className="font-medium">
                                        {currentValue.expiryMonth && currentValue.expiryYear
                                            ? `${currentValue.expiryMonth}/${currentValue.expiryYear.slice(-2)}`
                                            : "MM/YY"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Back Side */}
                    <Card className="absolute inset-0 w-full h-full bg-slate-700 text-white p-6 flex flex-col justify-between backface-hidden rotate-y-180">
                        <div className="w-full h-12 bg-black mt-4" />
                        <div className="flex justify-end items-center space-x-4">
                            <div className="text-right">
                                <div className="text-xs opacity-70 uppercase">{currentValue.cvvLabel}</div>
                                <div className="bg-white text-black px-2 py-1 rounded text-center font-mono">
                                    {currentValue.cvv || "•••"}
                                </div>
                            </div>
                            <Lock className="w-6 h-6 opacity-60" />
                        </div>
                    </Card>
                </motion.div>
            </div>

            {/* --- Input Fields --- */}
            <div className="space-y-4">
                <Input
                    className={'rounded-none shadow-none'}
                    placeholder="Cardholder Name"
                    value={currentValue.cardholderName}
                    onChange={(e) => handleInputChange("cardholderName", e.target.value.toUpperCase())}
                />
                <Input
                    className={'rounded-none shadow-none'}
                    placeholder="Card Number"
                    value={currentValue.cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                />
                <div className="grid grid-cols-3 gap-2">
                    <Select value={currentValue.expiryMonth} onValueChange={(v) => handleInputChange("expiryMonth", v)}>
                        <SelectTrigger className={'rounded-none shadow-none'}><SelectValue placeholder="MM" /></SelectTrigger>
                        <SelectContent>{months.map(m => <SelectItem key={m} value={m}>{m}</SelectItem>)}</SelectContent>
                    </Select>
                    <Select value={currentValue.expiryYear} onValueChange={(v) => handleInputChange("expiryYear", v)}>
                        <SelectTrigger className={'rounded-none shadow-none'} ><SelectValue placeholder="YYYY" /></SelectTrigger>
                        <SelectContent >{years.map(y => <SelectItem key={y} value={y}>{y}</SelectItem>)}</SelectContent>
                    </Select>
                    <Input
                        className={'rounded-none shadow-none'}
                        placeholder="CVV"
                        value={currentValue.cvv}
                        onChange={(e) => handleInputChange("cvv", e.target.value.replace(/\D/g, ""))}
                        maxLength={cardType === "amex" ? 4 : 3}
                    />
                </div>

                {/* Validation Messages */}
                <div className="text-sm text-red-500">
                    {!cardNumberValid && currentValue.cardNumber && "Invalid card number"}
                    {!expiryValid && currentValue.expiryMonth && currentValue.expiryYear && "Invalid expiry date"}
                    {!cvvValid && currentValue.cvv && "Invalid CVV"}
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
            .perspective-1000 { perspective: 1000px; }
            .backface-hidden { backface-visibility: hidden; }
            .rotate-y-180 { transform: rotateY(180deg); }
          `,
                }}
            />
        </div>
    );
});

CreditCard.displayName = "CreditCard";
