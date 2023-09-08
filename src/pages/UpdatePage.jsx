// UpdatePage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Vactor from '../assets/vactor.png'


const UpdatePage = (props) => {
    const [status, setStatus] = useState('');

    const location = useLocation();
    const user = location.state.user;
    console.log(" userrrrr", user.is_admin)
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone_number, setPhone_number] = useState(user.phone_number);
    const [profilePicture, setProfilePicture] = useState(null);


    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePhonenoChange = (e) => {
        setPhone_number(e.target.value);
    };

    const handleUpdate = async () => {

        if (!name.match(/^[a-zA-Z]*$/)) {
            setStatus("Name Should be Alphabet")
            return;
        }
        else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setStatus("invalid email")
            return;
        }
        else if (!phone_number.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
            setStatus("invalid phone")
            return;
        }

        try {
            const updatedUser = {
                ...user,
                name: name,
                email: email,
                phone_number: phone_number
            };

            let requestData = JSON.stringify(updatedUser);

            let config = {
                method: 'PUT',
                url: `http://172.20.17.81:8000/core/user/${user.id}/`,

                headers: {
                    'Content-Type': 'application/json'
                },
                data: requestData
            };

            axios.request(config)
                .then((response) => {
                    console.log(JSON.stringify(response.data));
                    setStatus("Updated successfully")
                })
                .catch((error) => {
                    console.log(error);
                });

            // Send update request to backend with updated user data
            // const response = await axios.put(`http://192.168.81.173:8000/core/user/${user.id}`, updatedUser);
            // console.log(response)


            // Handle response and update user in parent component's state
            // Redirect back to the main page after successful update

        } catch (error) {
            console.error('Error updating user:', error);
        }
    };














    // const handleUpdate = async () => {
    //     try {
    //         const response = await axios.put(`http://172.20.17.81:8000/core/user/${user.id}/`, { //env file url
    //             name: name,
    //             email: email,
    //             phone_number: phone_number   // const history = useHistory();

    //         });

    //         if (response.status === 200) {
    //             // console.log("first,", response)
    //             console.log('check token', response);
    //             // window.location.href = '/Dashboard';
    //             setStatus('Update successful!');
    //             // localStorage.setItem('user-token', response.data.jwt);
    //             // localStorage.removeItem('user-token', response.data.jwt);



    //             // navigate('/dashbord');

    //             // history.push('/dashbord');
    //         } else {
    //             setStatus('updateUser failed. Please check your credentials.');
    //         }
    //     } catch (error) {

    //     }
    // };












    const handleProfilePictureClick = () => {
        const input = document.getElementById('profile-picture');
        if (input) {
            input.click();
        }
    };

    const handleProfilePictureChange = (selectedFile) => {
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setProfilePicture(imageUrl);
        }
    };
    let bg = { Vactor };
    return (
        console.log(user),
        <div className='flex flex-wrap justify-center bg-gray-200 w-full h-screen items-center'>
            <div className='mx-auto bg-white w-6/12 h-3/4 py-4 px-10 rounded-xl flex flex-col '>
                <div className='mx-auto items-center w-full justify-center flex flex-col'>
                    {/* <i className="fas fa-user-circle fa-lg cursor-pointer rounded-full h-16 w-16 cursor-pointer"></i> */}
                    <div className="p-4 text-center " onClick={handleProfilePictureClick}>

                        <input
                            type="file"
                            id="profile-picture"
                            accept="image/*"
                            onChange={(e) => handleProfilePictureChange(e.target.files[0])}
                            style={{ display: 'none' }}
                        />
                        {profilePicture ? (
                            <img src={profilePicture} alt="Profile" className=" rounded-full h-20 w-20 cursor-pointer mx-4 " />) : (
                            <div className="fas fa-user-circle rounded-full h-24 w-24 text-8x1 cursor-pointer mx-2 "></div>)}
                        <h2 className='text-xl font-semibold '>Update User</h2>
                    </div>


                </div>

                <div className='py-2'>

                    <div className='w-8/12 flex text-lg font-medium mx-auto py-2'>



                        <input type="text" className="p-2 h-full" value={name} onChange={handleNameChange} />
                    </div>
                    <div className='w-8/12 flex text-lg font-medium mx-auto py-2 '>

                        <input type="email" className="p-2 h-full" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className='w-8/12 flex text-lg font-medium mx-auto py-2'>

                        <input type="phoneno" className="p-2 h-full" value={phone_number} onChange={handlePhonenoChange} />
                    </div>
                    <div className='w-full flex'>
                        <button className='mx-auto text-lg font-bold w-5/12' onClick={handleUpdate}>Update</button>
                    </div>
                    <div>
                        <p className=" text-center status">{status}</p>
                    </div>
                    <Link to="/home"> <div className='text-md font-bold p-2 text-blue-600  '>Back to Home</div></Link>
                </div>
            </div>
        </div>

    );
};

export default UpdatePage;
