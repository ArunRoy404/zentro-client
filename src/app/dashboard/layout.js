import DashboardLayout from '@/layout/DashboardLayout';
import React from 'react';

const layout = ({ children }) => {
    return (
        <main>
            <DashboardLayout>
                {children}
            </DashboardLayout>
        </main>
    );
};

export default layout;