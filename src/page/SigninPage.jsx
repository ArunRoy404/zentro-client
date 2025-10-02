import GoogleLogIn from '@/components/Authentication/GoogleLogIn';
import SigninForm from '@/components/Form/SigninForm';
import Link from 'next/link';
import React from 'react';

const SigninPage = () => {
    return (
        <section className='mx-auto max-w-[480px] h-screen flex items-center justify-center  px-4'>
            <div className='w-full'>
                {/* heading  */}
                <div className='space-y-2 text-center mb-10 md:mb-16 px-4'>
                    <h1 className='text-[rgba(33,43,54,1)] font-bold text-2xl' >
                        Sign In to your Account
                    </h1>
                    <p className='text-[rgba(99,115,129,1)] text-base font-normal'>
                        Please share your login details so you can access the website.
                    </p>
                </div>


                {/* form  */}
                <SigninForm />

                {/* divider  */}
                <div className="flex items-center mx-auto max-w-[480px] my-3 px-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-[rgba(99,115,129,1)] text-sm font-normal">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>


                {/* google login  */}
                <GoogleLogIn />


                {/* redirect  */}
                <div className='mx-auto max-w-[480px] mt-4 md:mt-8 px-4 flex items-center justify-center gap-1'>
                    <p className='text-[rgba(33,43,54,1)] text-sm font-medium'>
                        Don't have an account?
                    </p>
                    <Link
                        href={'/registration'}
                        className='text-primary font-semibold text-sm'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;