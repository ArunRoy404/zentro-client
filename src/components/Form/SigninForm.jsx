"use client";

import { useForm } from "react-hook-form";
import { json, z } from "zod";
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
        // setIsLoading(true)

        // body 
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values),
            redirect: 'follow'
        };

        console.log(values);

        // try {
        //     const response = await fetch("https://zentro-server.vercel.app/api/users/", requestOptions)
        //     const data = await response.json();


        //     // successful 
        //     if (response.ok) {
        //         setStatus({ type: 'success', ...data })
        //         toast("Account Created Successfully.", {
        //             action: {
        //                 label: "Close",
        //             },
        //             duration: 5000,
        //         })

        //         // redirect to otp verification 
        //         // router.push('/verify')
        //     }

        //     // unsuccessful 
        //     else {
        //         setStatus({ type: 'error', ...data });
        //     }
        // } catch (error) {
        //     setStatus({ type: 'server-error', message: "Something went wrong", error })
        // } finally {
        //     setIsLoading(false)
        // }
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


                    {/* Submit Button */}
                    <Button disabled={isLoading} type="submit" className="mt-6 cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
                        {
                            isLoading
                                ? <Spinner stroke="10" color="white" size="10" />
                                : ' Create Account '
                        }
                    </Button>

                    {/* status message  */}
                    <Message status={status} />
                </form>
            </Form>
        </div>
    );
}

export default SigninForm;