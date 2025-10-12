"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable } from "@/components/Dashboard/DataTable"
import AlertTable from "@/components/Alert/AlertTable"
import SkeletonTable from "@/components/Skeleton/SkeletonTable"
import HeadingDashboard from "@/components/Dashboard/HeadingDashboard"
import { propertiesColumns } from "@/page/dashboard/properties/propertiesColumns"
import axiosSecure from "@/api/axiosInstance"

const PropertiesAll = () => {
    const dataFilter = ["title", "price", "status"]
    const {
        data: properties = [],
        isFetching,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["all-properties"],
        queryFn: async () => {
            const res = await axiosSecure.get("https://zentro-server.vercel.app/api/v1/property/get-dashboard-property")
            return res.data?.data || []
        },
    })

    return (
        <div>
            <HeadingDashboard
                title="Properties"
                refetch={refetch}
                data={properties}
            />

            {
                isFetching
                    ? <SkeletonTable />
                    : isError
                        ? <AlertTable message={error?.message} label={'Properties'} />
                        : <DataTable columns={propertiesColumns} data={properties} dataFilter={dataFilter} />
            }
        </div>
    )
}
export default PropertiesAll;