"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function SkeletonTable() {
    return (
        <div className="w-full border overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead><Skeleton className="h-4 w-24 bg-gray-400" /></TableHead>
                        <TableHead><Skeleton className="h-4 w-32 bg-gray-400" /></TableHead>
                        <TableHead><Skeleton className="h-4 w-28 bg-gray-400" /></TableHead>
                        <TableHead><Skeleton className="h-4 w-20 bg-gray-400" /></TableHead>
                        <TableHead><Skeleton className="h-4 w-24 bg-gray-400" /></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {Array.from({ length: 6 }).map((_, i) => (
                        <TableRow key={i}>
                            <TableCell><Skeleton className="h-4 w-24 bg-gray-200" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-32 bg-gray-200" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-28 bg-gray-200" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-20 bg-gray-200" /></TableCell>
                            <TableCell><Skeleton className="h-4 w-24 bg-gray-200" /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
