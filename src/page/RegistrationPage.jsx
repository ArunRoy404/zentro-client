import GoogleLogIn from '@/components/Authentication/GoogleLogIn';
import RegisterForm from '@/components/Form/RegisterForm';
import Link from 'next/link';
import React from 'react';

const RegistrationPage = () => {
    return (
        <section className='mx-auto max-w-[480px] pt-30 flex items-center justify-center  px-4'>
            <div>
                {/* heading  */}
                <div className='space-y-2 text-center mb-10 md:mb-16 px-4'>
                    <h1 className='text-[rgba(33,43,54,1)] font-bold text-2xl' >
                        Create your Account
                    </h1>
                    <p className='text-[rgba(99,115,129,1)] text-base font-normal'>
                        Start your journey to finding the perfect property today.
                    </p>
                </div>


                {/* form  */}
                <RegisterForm />


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
                        Already have an account?
                    </p>
                    <Link
                        href={'/signin'}
                        className='text-primary font-bold text-sm'
                    >
                        sign in
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RegistrationPage;