"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputCustom from "../Input/InputCustom";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { toast } from "sonner";
import Message from "../ui/Message";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { signIn } from 'next-auth/react'



// validate inputs 
const formSchema = z
    .object({
        email: z.string().email("Enter a valid email"),
        password: z.string().min(6, "Password must be at least 6 characters"),
    })


const SigninForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const router = useRouter();

    // form data 
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            agree: false,
        },
    });




    const onSubmit = async (values) => {
        setIsLoading(true)
        setStatus(null)

        try {
            const credentials = { ...values, redirect: false }
            const result = await signIn("credentials", credentials)

            if (result?.ok) {
                setStatus({ type: 'success', message: "Signin successful" })
                toast("Signin Successful", {
                    action: {
                        label: "Close"
                    }
                })
                router.push('/')
            } else {
                setStatus({ type: 'error', message: "Invalid Credentials" })
            }
        } catch (error) {
            // setStatus({type: 'error', message: "Invalid Credentials"})
            setStatus({ type: 'error', message: "Something went wrong" })
        } finally {
            setIsLoading(false)
        }
    }



    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

                    {/* input fields */}
                    <InputCustom form={form} label={'Email'} id={'email'} />
                    <InputCustom form={form} label={'Password'} id={'password'} />



                    <div className="flex items-center justify-between">
                        <InputCustom form={form} id={'rememberMe'} checkBox={true} >
                            Remember me
                        </InputCustom>
                        <Link
                            href={'/reset-password-email'}
                            className='text-primary font-semibold text-sm'
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* status message  */}
                    <Message status={status} />


                    {/* Submit Button */}
                    <Button disabled={isLoading} type="submit" className="mt-6 cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        {
                            isLoading
                                ? <Spinner stroke="10" color="white" size="10" />
                                : 'Sign In'
                        }
                    </Button>
                </form>
            </Form>
        </div>
    );
}

export default SigninForm;