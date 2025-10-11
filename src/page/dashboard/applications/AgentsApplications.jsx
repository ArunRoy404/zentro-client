"use client"

import { useQuery } from "@tanstack/react-query"
import { DataTable } from "@/components/Dashboard/DataTable"
import AlertTable from "@/components/Alert/AlertTable"
import SkeletonTable from "@/components/Skeleton/SkeletonTable"
import HeadingDashboard from "@/components/Dashboard/HeadingDashboard"
import { getAllAgents } from "@/api/agentsApi"
import agentsColumns from "./agentsColumns"



const AgentsApplications = () => {
    const dataFilter = ["name", "email", "bio", "licenseNo", "totalSales", "officeAddress"]
    const {
        data: agents = [],
        isFetching,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ["all-applications"],
        queryFn: getAllAgents
    })

    const pendingAgents = agents?.filter(agent => agent.status === "pending") || [];

    const handleUpdate = () => {
        refetch()
    }

    return (
        <div>
            <HeadingDashboard
                title="Applications"
                refetch={refetch}
                data={pendingAgents}
            />

            {
                isFetching
                    ? <SkeletonTable />
                    : isError
                        ? <AlertTable message={error?.message} label={'Applications'} />
                        : <DataTable columns={agentsColumns(handleUpdate)} data={pendingAgents} dataFilter={dataFilter} />

            }
        </div>
    )
}

export default AgentsApplications
