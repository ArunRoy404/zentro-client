import GoogleLogIn from '@/components/Authentication/GoogleLogIn';
import SigninForm from '@/components/Form/SigninForm';
import Link from 'next/link';
import React from 'react';

const SigninPage = () => {
    return (
        <section className='min-w-[100vw] min-h-[100vh] flex items-center justify-center  px-4'>
            <div className=' max-w-[480px] mx-auto py-30 '>
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
                    <div className="flex items-center my-3 px-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-[rgba(99,115,129,1)] text-sm font-normal">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>


                    {/* google login  */}
                    <GoogleLogIn />


                    {/* redirect  */}
                    <div className='mx-auto mt-4 md:mt-8 px-4 flex items-center justify-center gap-1'>
                        <p className='text-[rgba(33,43,54,1)] text-sm font-medium'>
                            Don't have an account?
                        </p>
                        <Link
                            href={'/registration'}
                            className='text-primary font-bold text-sm'
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;