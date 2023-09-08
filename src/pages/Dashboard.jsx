import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
            {/* Your dashboard content */}
            <Link to="/logout">Logout</Link>
        </div>
    );
}

export default Dashboard;
