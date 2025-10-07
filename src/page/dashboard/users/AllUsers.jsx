import { DataTable } from '@/components/Dashboard/DataTable';
import usersColumns from '@/components/Dashboard/users/usersColumns';
import data from '@/dummyData/data.json'

const AllUsers = () => {
    return (
        <div>
            <DataTable columns={usersColumns} data={data} />
        </div>
    );
};

export default AllUsers;