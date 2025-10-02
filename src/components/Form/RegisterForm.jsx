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



// validate inputs 
const formSchema = z
    .object({
        name: z.string().min(1, "First name is required"),
        email: z.string().email("Enter a valid email"),
        photoUrl: z.string().url("Enter a valid photoURl"),
        phone: z.string().regex(/^01\d{9}$/, "Enter a valid phone number"),
        address: z.string().min(1, "Enter a valid address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Confirm your password"),
        agree: z.boolean().refine((val) => val, {
            message: "You must agree to the terms",
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });


const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState(null)
    const router = useRouter();

    // form data 
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            photoUrl: "",
            phone: "",
            address: "",
            confirmPassword: "",
            agree: false,
        },
    });


    const onSubmit = async (values) => {
        setIsLoading(true)

        // body 
        const requestOptions = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values),
            redirect: 'follow'
        };


        try {
            const response = await fetch("https://zentro-server.vercel.app/api/users/", requestOptions)
            const data = await response.json();


            // successful 
            if (response.ok) {
                setStatus({ type: 'success', ...data })
                toast("Account Created Successfully.", {
                    action: {
                        label: "Close",
                    },
                    duration: 5000,
                })

                // redirect to otp verification 
                // router.push('/verify')
            }

            // unsuccessful 
            else {
                setStatus({ type: 'error', ...data });
            }
        } catch (error) {
            setStatus({ type: 'server-error', message: "Something went wrong", error })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">

                    {/* input fields */}
                    <InputCustom form={form} label={'Name'} id={'name'} />
                    <InputCustom form={form} label={'Photo URL'} id={'photoUrl'} />
                    <InputCustom form={form} label={'Phone'} id={'phone'} />
                    <InputCustom form={form} label={'Address'} id={'address'} />
                    <InputCustom form={form} label={'Email'} id={'email'} />
                    <InputCustom form={form} label={'Password'} id={'password'} />
                    <InputCustom form={form} label={'Confirm Password'} id={'confirmPassword'} />
                    <InputCustom form={form} id={'agree'} checkBox={true} >
                        I agree to Tech Takes
                        <a href="#" className="border-b-1 border-black cursor-pointer">Terms of Service</a>
                        and
                        <a href="#" className="border-b-1 border-black cursor-pointer">Privacy Policy</a>.
                    </InputCustom>


                    {/* Submit Button */}
                    <Button disabled={isLoading} type="submit" className="mt-2 cursor-pointer w-full text-xs md:text-base font-bold leading-6  md:py-6">
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

export default RegisterForm;