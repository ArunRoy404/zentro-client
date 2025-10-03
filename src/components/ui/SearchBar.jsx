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

    return (

        <Form {...form} >
            <form className="mt-3 flex flex-col md:flex-row gap-4 items-center">
                <InputCustom form={form} label={'Location'} id={'location'} />

                <Button className="bg-neutral-900 text-white hover:bg-neutral-800 w-full md:w-auto">
                    Search
                </Button>
            </form>
        </Form>
    );
};

export default SearchBar;