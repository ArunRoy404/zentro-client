"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable } from "@/components/Dashboard/DataTable"
import AlertTable from "@/components/Alert/AlertTable"
import SkeletonTable from "@/components/Skeleton/SkeletonTable"
import HeadingDashboard from "@/components/Dashboard/HeadingDashboard"
import { getAllAgents } from "@/api/agentsApi"
import agentsColumns from "./agentsColumns"



const AllAgents = () => {
    const dataFilter = ["name", "email", "bio", "licenseNo", "totalSales", "officeAddress" ]
    const {
        data: agents = [],
        isFetching,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["all-agents"],
        queryFn: getAllAgents
    })

    const approvedAgents = agents?.filter(agent => agent.status === "approved") || [];

    const handleUpdate = () => {
        refetch()
    }

    return (
        <div>
            <HeadingDashboard
                title="Agents"
                refetch={refetch}
                data={approvedAgents}
            />

            {
                isFetching
                    ? <SkeletonTable />
                    : isError
                        ? <AlertTable message={error?.message} label={'Agent'} />
                        : <DataTable columns={agentsColumns(handleUpdate)} data={approvedAgents} dataFilter={dataFilter} />

            }
        </div>
    )
}

export default AllAgents
