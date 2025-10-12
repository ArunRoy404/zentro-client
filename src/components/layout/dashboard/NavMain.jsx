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
import { useSession } from "next-auth/react"

const items = [
    {
        accessFor: 'all',
        title: "Properties",
        url: "/properties",
        icon: Building2,
        items: [
            { title: "All Properties", url: "/dashboard/properties" },
            { title: "Add Property", url: "/dashboard/properties/add" },
            // { title: "Categories", url: "/dashboard/properties/categories" },
        ],
    },
    {
        accessFor: 'admin',
        title: "Agents",
        url: "/agents",
        icon: Users,
        items: [
            { title: "All Agents", url: "/dashboard/agents" },
            { title: "Applications", url: "/dashboard/agents/applications" },
            // { title: "Add Agent", url: "/dashboard/agents/add" },
        ],
    },
    {
        accessFor: 'admin',
        title: "Users",
        url: "/users",
        icon: User,
        items: [
            { title: "All Users", url: "/dashboard/users" },
            // { title: "Add User", url: "/dashboard/users/add" },
        ],
    },
]


export function NavMain() {
    const session = useSession()
    const role = session?.data?.user?.role

    return (
        <SidebarGroup>
            <SidebarGroupLabel>Platform</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    if (item.accessFor === 'all' || role === 'admin') {
                        return (
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
                        )
                    }
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
