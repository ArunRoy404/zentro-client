import { ChartAreaInteractive } from "@/components/Dashboard/ChartAreaInteractive";
import StatCard from "@/components/Dashboard/StatCard";


const DashboardHome = () => {
    return (
        <div className="p-4" >
            <div className="grid mb-4 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard title={'Properties'} api={"https://zentro-server.vercel.app/api/v1/property/get-all-property"} />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>

            <ChartAreaInteractive />

        </div>
    );
};

export default DashboardHome;
