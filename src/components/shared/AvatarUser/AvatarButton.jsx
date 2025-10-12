import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const AvatarButton = ({className, label, Icon, link}) => {
    return (
        <Button
            variant="ghost"
            className={`w-full justify-start ${className || ""}`}
            asChild
        >
            <Link href={link}>
                <Icon className="mr-2 h-4 w-4" />
                {label}
            </Link>
        </Button>
    );
};

export default AvatarButton;