import React from 'react';
import { useNavigate } from 'react-router-dom';
function Logout() {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout-related tasks here
        // For example, clear user session, tokens, or any other data

        // Clear localStorage or session storage data

        localStorage.clear();         // localStorage.removeItem('user-token', response.data.jwt);


        // Navigate to the login page
        navigate('/login');
    };

    return (
        <div>
            <h2>Logout</h2>
            <p>Are you sure you want to log out?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
