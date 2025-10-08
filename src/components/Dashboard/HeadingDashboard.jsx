import React from 'react';
import { Button } from '../ui/button';
import { RefreshCcw } from 'lucide-react';

const HeadingDashboard = ({ refetch, title, data }) => {
    return (
        <div className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{title} Management</h1>
                    <p className="text-gray-600 mt-2">
                        Manage and view all {title} in the system
                        {data?.length > 0 && (
                            <span className="text-blue-600 font-medium ml-2">
                                ({data?.length} {title} found)
                            </span>
                        )}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {
                        !!refetch &&
                        <Button
                            onClick={refetch}
                            variant={'outline'}>
                            <RefreshCcw />
                            Refresh
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default HeadingDashboard;