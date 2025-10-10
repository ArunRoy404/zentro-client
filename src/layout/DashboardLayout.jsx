'use client'

import BreadCrumbCustom from "@/components/layout/dashboard/BreadCrumbCustom"
import { DashboardSidebar } from "@/components/layout/dashboard/DashboardSidebar"
import ThemeToggle from "@/components/Toggle/ThemeToggle"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"


export default function DashboardLayout({ children }) {


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


                        {/* breadcrumbs  */}
                        <BreadCrumbCustom />

                    </div>



                    <div className="fixed right-5">
                        {/* theme toggle  */}
                        <ThemeToggle />
                    </div>

                </header>


                {/* child contents  */}
                <div className="pt-16">
                    <div className='p-4'>
                        {children}
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
