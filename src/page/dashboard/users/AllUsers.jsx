import { DataTable } from '@/components/Dashboard/DataTable';
import usersColumns from '@/components/Dashboard/users/usersColumns';
import data from '@/dummyData/data.json'

const AllUsers = () => {
    // filter options 
    const dataFilter = [
        'name',
        'email',
        'address',
        'role',
    ]



    return (
        <div>
            <DataTable
                columns={usersColumns}
                data={data}
                dataFilter={dataFilter}
            />
        </div>
    );
};

export default AllUsers;