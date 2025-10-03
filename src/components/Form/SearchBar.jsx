'use client'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import InputCustom from "../Input/InputCustom";




// validate inputs 
const formSchema = z
    .object({
        location: z.string().min(1, "Enter a valid location"),
    })



const SearchBar = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: "",
        },
    });

    const onSubmit = (values) => {
        console.log(values);
    }

    return (

        <Form {...form} >
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="mt-3 flex flex-col md:flex-row gap-4 items-center">
                <InputCustom form={form} label={'Location'} id={'location'} />

                <Button type='submit' className="w-full md:w-auto">
                    Search
                </Button>
            </form>
        </Form>
    );
};

export default SearchBar;