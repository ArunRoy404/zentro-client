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

// ✅ Zod validation schema
const propertySchema = z.object({
    title: z.string().min(3, "Title is required"),
    description: z.string().min(10, "Description too short"),
    propertyType: z.string().min(1, "Category required"),
    propertyFeatures: z.string().min(1, "Features required"),
    location: z.object({
        city: z.string().min(1, "City required"),
        state: z.string().min(1, "State required"),
    }),
    status: z.string().min(1, "Status required"),

    price: z
        .union([z.number(), z.undefined()])
        .refine((val) => val !== undefined, { message: "Price is required" })
        .refine((val) => val > 0, { message: "Price must be positive" }),

    propertyArea: z.object({
        value: z
            .union([z.number(), z.undefined()])
            .refine((val) => val !== undefined, { message: "Area is required" })
            .refine((val) => val > 0, { message: "Area must be positive" }),
        unit: z.string().min(1, "Unit required"),
    }),
});

export default function AddPropertyForm() {
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [imageError, setImageError] = useState(false);


    const form = useForm({
        resolver: zodResolver(propertySchema),
        defaultValues: {
            title: "",
            description: "",
            propertyType: "",
            propertyFeatures: "",
            propertyArea: { value: undefined, unit: "sq ft" },
            price: undefined,
            location: { city: "", state: "" },
            status: "available",
        },
    });

    const onSubmit = (data) => {
        if (!imageUrl) {
            setImageError(true)
            toast.error('Upload Image');
            return
        }
        const payload = {
            ...data,
            images: imageUrl,
        };
        console.log("📝 Property Form Data:", payload);
        toast.success("Form data logged in console!");
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
                                <ImageUpload onUploadSuccess={setImageUrl} />
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
                    <InputCustom form={form} label="Property Category" id="propertyType" />

                    {/* Property Features */}
                    <InputCustom form={form} label="Property Features (comma separated)" id="propertyFeatures" />

                    {/* Status */}
                    <InputCustom form={form} label="Status" id="status" />

                    {/* Description */}
                    <InputCustom form={form} label="Description" id="description" textArea />

                    <Button type="submit" className="w-full mt-4" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Add Property"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
