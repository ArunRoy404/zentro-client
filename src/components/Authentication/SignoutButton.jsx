import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { signOut } from 'next-auth/react';
import Spinner from '../ui/Spinner';

const SignoutButton = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSignout = async () => {
        setIsLoading(true)
        try {
            await signOut({ redirect: false })
            toast.success("Signout successful")
        } catch {
            toast.error("Signout unsuccessful")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Button
            disabled={isLoading}
            onClick={handleSignout}
            variant={'outline'}
            className='w-full'>
            {
                isLoading
                    ? <Spinner size='8' />
                    : 'Sign Out'
            }
        </Button>
    );
};

export default SignoutButton;