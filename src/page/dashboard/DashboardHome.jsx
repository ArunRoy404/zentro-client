import StatCard from "@/components/Dashboard/StatCard";


const DashboardHome = () => {
    return (
        <div className="p-4" >
            <div className="grid  md:grid-cols-2 xl:grid-cols-4 gap-4">
                <StatCard />
                <StatCard />
                <StatCard />
                <StatCard />
            </div>
        </div>
    );
};

export default DashboardHome;
