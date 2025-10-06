import { Command } from "lucide-react"
import {
    SidebarMenu,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

export function TeamSwitcher() {
    return (
        <SidebarMenu>
            <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">Zentro</span>
                    <span className="truncate text-xs">Real Estate Management</span>
                </div>
            </SidebarMenuButton>
        </SidebarMenu>
    )
}
