import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation";


const BreadCrumbCustom = () => {
    const pathname = usePathname()
    const pathSegments = pathname.split("/").filter(Boolean)


    return (
        <Breadcrumb>
            <BreadcrumbList>

                {
                    pathSegments.map((path, index) => {
                        return (
                            <div key={index} className="flex items-center gap-2">
                                <BreadcrumbItem className="">
                                    <BreadcrumbLink href="#">
                                        <span className={`${pathSegments.length === index + 1 ? 'text-black' : ''}`}>
                                            {
                                                path[0].toUpperCase() + path.slice(1, path.length)
                                            }
                                        </span>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className={`${pathSegments.length !== index + 1 ? '' : 'hidden '}`} />
                            </div>
                        )
                    })
                }
            </BreadcrumbList>
        </Breadcrumb>
    );
};

export default BreadCrumbCustom;