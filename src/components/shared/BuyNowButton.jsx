import React from 'react';
import { Button } from '../ui/button';
import { Wallet } from 'lucide-react';
import Link from 'next/link';

const BuyNowButton = ({ propertyId }) => {
    return (
        <Link href={`/payment?${propertyId}`}>
            <Button
                variant="outline"

            >
                <Wallet size={18} />
                Add to Cart
            </Button>
        </Link>
    );
};

export default BuyNowButton;