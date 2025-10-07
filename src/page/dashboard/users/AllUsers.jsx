import { DataTable } from '@/components/Dashboard/DataTable';
import demoColumns from '@/components/Dashboard/Table/DemoColumns';
import data from '@/dummyData/data.json'

const AllUsers = () => {
    return (
        <div>
            <DataTable columns={demoColumns} data={data} />
        </div>
    );
};

export default AllUsers;