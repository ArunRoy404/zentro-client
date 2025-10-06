"use client"

import {
    Bot,
    Settings2,
    SquareTerminal,
    BookOpen,
    Building2,
    Users,
    User,
    ChevronRight
} from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"

const items = [
    {
        title: "Properties",
        url: "/properties",
        icon: Building2,
        items: [
            { title: "All Properties", url: "/properties" },
            { title: "Add Property", url: "/properties/add" },
            { title: "Categories", url: "/properties/categories" },
        ],
    },
    {
        title: "Agents",
        url: "/agents",
        icon: Users,
        items: [
            { title: "All Agents", url: "/agents" },
            { title: "Applications", url: "/agents/applications" },
            { title: "Add Agent", url: "/agents/add" },
        ],
    },
    {
        title: "Users",
        url: "/users",
        icon: User,
        items: [
            { title: "All Users", url: "/users" },
            { title: "Add User", url: "/users/add" },
        
        ],
    },
]


export function NavMain() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => (
                    <Collapsible
                        key={item.title}
                        asChild
                        defaultOpen={item.isActive}
                        className="group/collapsible"
                    >
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub>
                                    {item.items?.map((subItem) => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <a href={subItem.url}>
                                                    <span>{subItem.title}</span>
                                                </a>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}
