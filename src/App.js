import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import AddUsers from './components/AddUsers';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Resetpassword from './components/Resetpassword';
import Passwordresetrequest from './components/Passwordresetrequest';
import Clientwebsite from './pages/Clientwebsite';
import Chatboard from './pages/Chatboard';
import UpdatePage from './pages/UpdatePage';
import Logout from './pages/Logout';
import Updateuser from './pages/Updateuser';
import ProtectedRoute from './components/protectedRoute';
import AllUser from './pages/AllUser';

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const checkUserToken = () => {
  //     const userToken = localStorage.getItem('user-token');
  //     if (!userToken || userToken === 'undefined') {
  //         setIsLoggedIn(false);
  //     }
  //     setIsLoggedIn(true);
  // }
  // useEffect(() => {
  //     checkUserToken();
  // }, [isLoggedIn]);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<AddUsers />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/Dashboard"element={localStorage.getItem("user-token") ? <Dashboard /> : <Login />} /> */}
        <Route path='/Dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/password-reset-request" element={<Passwordresetrequest />} />
        <Route path="/reset-password/:token" element={<Resetpassword />} />
        <Route path="/" element={<Clientwebsite />} />

        <Route path="/chatboard" element={<Chatboard />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path='/logout' element={< Logout />} />
        <Route path='/updateuser' element={<Updateuser />} />
        {/* <Route path='/alluser'element={<AllUser/>}/> */}
        {/* <Route path='updatepage' element={<UpdatePage/>}/> */}

      </Routes>
    </div>
  );
}
