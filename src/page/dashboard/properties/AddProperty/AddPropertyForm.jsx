"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import ImageUpload from "@/components/ui/ImageUpload";
import InputCustom from "@/components/Input/InputCustom";
import axios from "axios";
import AlertCustom from "@/components/Alert/AlertCustom";



// Zod validation schema
const propertySchema = z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string().min(10, "Description too short"),
    propertyCategory: z.string().min(1, "Category required"),
    propertyFeatures: z.string().min(1, "Features required"),
    location: z.object({
        city: z.string().min(1, "City required"),
        state: z.string().min(1, "State required"),
    }),
    status: z.string().min(1, "Status required"),



    price: z.preprocess(
        (val) => (val === "" ? undefined : Number(val)),
        z.number({ required_error: "Price is required" }).positive("Price must be positive")
    ),
    propertyArea: z.object({
        value: z.preprocess(
            (val) => (val === "" ? undefined : Number(val)),
            z.number({ required_error: "Area is required" }).positive("Area must be positive")
        ),
        unit: z.string().min(1, "Unit required"),
    }),

});




export default function AddPropertyForm() {
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [status, setStatus] = useState(null)

    const form = useForm({
        resolver: zodResolver(propertySchema),
        defaultValues: {
            title: "",
            description: "",
            propertyCategory: "",
            propertyFeatures: "",
            propertyArea: { value: "", unit: "sq ft" },
            price: "",
            location: { city: "", state: "" },
            status: "available",
        },
    });

    const onSubmit = async (data) => {

        // check image uploaded 
        if (!imageUrl) {
            setImageError(true);
            toast.error("Upload Image");
            return;
        }

        // reset states  
        setStatus(null)
        setIsLoading(true);


        try {
            // Convert comma-separated features into an array
            const propertyFeatures = data.propertyFeatures
                ? data.propertyFeatures.split(",").map((f) => f.trim())
                : [];

            const payload = {
                ...data,
                propertyFeatures,
                images: imageUrl,
            };

            const res = await axios.post(
                "https://zentro-server.vercel.app/api/v1/property/add-property",
                payload
            );

            if (res.data?.success) {
                toast.success("Property added successfully!");
                setStatus({ type: 'success', message: "Properties Added successfully" })

                // reset values 
                form.reset({
                    title: "",
                    description: "",
                    propertyCategory: "",
                    propertyFeatures: "",
                    propertyArea: { value: "", unit: "sq ft" },
                    price: "",
                    location: { city: "", state: "" },
                    status: "available",
                });
                setImageUrl("");
            } else {
                toast.error(res.data?.message || "Failed to add property.");
                setStatus({ type: 'error', message: "Failed to add property." })
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong while adding property."
            );
            setStatus({ type: 'error', message: "Something went wrong" })
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">

                    <div className="flex flex-col lg:flex-row  gap-5">
                        {/* Image Upload */}
                        <div
                            onClick={() => setImageError(false)}
                        >
                            <label className="text-sm font-medium mb-2 block">Property Image
                                {imageError && <span className="ml-4 text-red-400">(Upload Image)</span>}
                            </label>
                            <div className="w-full lg:w-[400px] h-[250px] lg:h-[220px]">
                                <ImageUpload setImageUrl={setImageUrl} imageUrl={imageUrl} />
                            </div>
                        </div>

                        <div className="w-full mt-7 space-y-5">
                            <InputCustom form={form} label="Title" id="title" />

                            {/* Price */}
                            <InputCustom form={form} label="Price" id="price" type="number" />

                            {/* Property Area */}
                            <div className="grid grid-cols-2 gap-3">
                                <InputCustom
                                    form={form}
                                    label="Property Area"
                                    id="propertyArea.value"
                                    type="number"
                                />
                                <InputCustom
                                    form={form}
                                    label="Unit"
                                    id="propertyArea.unit"
                                />
                            </div>

                            {/* Location */}
                            <div className="grid grid-cols-2 gap-3">
                                <InputCustom form={form} label="City" id="location.city" />
                                <InputCustom form={form} label="State" id="location.state" />
                            </div>
                        </div>
                    </div>
                    {/* Title */}

                    {/* Property Category */}
                    <InputCustom form={form} label="Property Category" id="propertyCategory" />

                    {/* Property Features */}
                    <InputCustom form={form} label="Property Features (comma separated)" id="propertyFeatures" />

                    {/* Status */}
                    <InputCustom form={form} label="Status" id="status" />

                    {/* Description */}
                    <InputCustom form={form} label="Description" id="description" textArea />


                    {/* status message  */}
                    <AlertCustom status={status} />

                    <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Add Property"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
