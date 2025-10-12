"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChevronUp } from "lucide-react";



const StatCard = ({ title, api, type }) => {
    const [number, setNumber] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNumber = async () => {
            try {
                const res = await axios.get(api);
                const count = res.data?.data?.length || 0;

                setNumber(count);
            } catch (error) {
                console.error("Error fetching data:", error);
                setNumber(0);
            } finally {
                setLoading(false);
            }
        };

        if (api) fetchNumber();
    }, [api]);





    return (
        <Card className="@container/card shadow-none rounded-none">
            <CardHeader>
                <CardDescription>Total {title}</CardDescription>
                <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                    {type && type}   {loading ? "Loading..." : number}
                </CardTitle>
                <CardAction>
                    <Badge variant="outline">
                        <ChevronUp />
                        +12.5%
                    </Badge>
                </CardAction>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1.5 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                    Trending up this month <ChevronUp className="size-4" />
                </div>
                <div className="text-muted-foreground">
                    {title} for the last 6 months
                </div>
            </CardFooter>
        </Card>
    );
};

export default StatCard;
