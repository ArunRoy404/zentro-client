'use client'

import { DashboardSidebar } from "@/components/layout/dashboard/DashboardSidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"

export default function DashboardLayout({ children }) {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter(Boolean)

    return (
        <SidebarProvider>

            {/* sidebar  */}
            <DashboardSidebar />


            <SidebarInset>
                <header className="fixed z-10 bg-background top-0 border-b w-full flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        <Breadcrumb>
                            <BreadcrumbList>

                                {
                                    pathSegments.map((path, index) => {
                                        return (
                                            <div key={index} className="flex items-center gap-2">
                                                <BreadcrumbItem className="hidden md:block">
                                                    <BreadcrumbLink href="#">
                                                        <span className={`${pathSegments.length === index + 1 ? 'text-black' : ''}`}>{path}</span>
                                                    </BreadcrumbLink>
                                                </BreadcrumbItem>
                                                <BreadcrumbSeparator className={`hidden ${pathSegments.length !== index + 1 ? 'md:block' : ''}`} />
                                            </div>
                                        )
                                    })
                                }
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>


                {/* child contents  */}
                <div className="pt-16">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
