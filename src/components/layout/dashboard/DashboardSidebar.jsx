"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "./NavMain"
import { NavLinksDashboard } from "./NavLinksDashboard"
import { NavUser } from "./NavUser"
import { TeamSwitcher } from "./TeamSwitcher"



export function DashboardSidebar(props) {
    return (
        <Sidebar collapsible="icon" {...props} className={'z-[100]'}>
            <SidebarHeader>
                <TeamSwitcher />
            </SidebarHeader>
            <SidebarContent>
                <NavMain />
                <NavLinksDashboard />
            </SidebarContent>
            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}