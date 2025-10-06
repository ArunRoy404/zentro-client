import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
    Home,
    Building2,
    Users,
    Info,
    Phone,
} from "lucide-react"

const navLinks = [
    { name: "Home", url: "/", icon: Home },
    { name: "Properties", url: "/properties", icon: Building2 },
    { name: "Agents", url: "/agents", icon: Users },
    { name: "About Us", url: "/about", icon: Info },
    { name: "Contact", url: "/contact", icon: Phone },
]

export function NavLinksDashboard() {
    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <SidebarGroupLabel>Navigation</SidebarGroupLabel>
            <SidebarMenu>
                {navLinks.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton asChild>
                            <a href={item.url}>
                                <item.icon />
                                <span>{item.name}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
