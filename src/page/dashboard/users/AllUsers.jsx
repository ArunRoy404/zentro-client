import { DataTableTemplate } from '@/components/Dashboard/DataTableTemplate';
import data from '@/dummyData/data.json'

const AllUsers = () => {
    return (
        <div>
            <DataTableTemplate data={data} />
        </div>
    );
};

export default AllUsers;