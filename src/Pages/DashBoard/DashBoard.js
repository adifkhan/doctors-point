import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-gray-50">
                <h2 className='text-2xl text-secondary text-center font-medium'>My Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>Appointment</Link></li>
                    <li><Link to='/dashboard/myreviews'>Reviews</Link></li>
                    <li><Link to='/dashboard/allusers'>All Users</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;