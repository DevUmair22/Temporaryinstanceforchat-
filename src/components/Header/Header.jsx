import React, { useState } from 'react';
import { RiNotification2Line, RiMessage2Line, RiAdminLine, RiArrowDownSLine } from 'react-icons/ri';
import { IoIosSearch } from 'react-icons/io';
import './header.css'
export default function Header() {
    const [profilePicture, setProfilePicture] = useState(null);

    const [adminName, setAdminName] = useState('ijlal shah');
    const [showDropdown, setShowDropdown] = useState(false);
    const [myreviewDropdown, setMyreviewDropdown] = useState(false);
    const [settingsDropdown, setSettingsDropdown] = useState(false);
    const [logoutDropdown, setLogoutDropdown] = useState(false);

    const [notificationDropdown, setNotificationDropdown] = useState(false);

    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };
    const NotificationDropdown = () => {
        setNotificationDropdown(!NotificationDropdown);
    };
    const MyreviewDropdown = () => {
        setMyreviewDropdown(!MyreviewDropdown);
    };
    const SettingsDropdown = () => {
        setSettingsDropdown(!SettingsDropdown);
    };
    const LogoutDropdown = () => {
        setLogoutDropdown(!LogoutDropdown);
    };

    const handleAdminNameChange = () => {
        const newName = prompt('Enter new admin name:');
        if (newName) {
            setAdminName(newName);
        }
    };
    const handleProfilePictureChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const imageUrl = URL.createObjectURL(selectedFile);
            setProfilePicture(imageUrl);
        }
    };

    return (
        <div style={{ background: 'white', }} className='h-18 w-full p-4 mr-4 mt-0 flex justify-around'>
            <div className='flex justify-around w-full' >

                <div className='flex items-center w-5/6 '>
                    <div style={{ background: '#FAFAFA', border: '#FAFAFA' }} className=' border-none flex items-center  mr-2 pl-8 rounded-md  w-5/6'>
                        <IoIosSearch className='text-gray-500 h-6 w-6' />
                        <input style={{ background: '#FAFAFA', border: 'none' }} type='text' className='border-none h-8 pl-4 m-0 rounded-full border-#FAFAFA w-5/6' placeholder='Search' />
                    </div>
                </div>
                <div className='flex items-center border w-2/3 justify-center  flex'>
                    <div className='flex mr-32 border '>
                        <div className='mr-4'>
                            <RiNotification2Line className='text-gray-500 h-6 w-16 ' />
                        </div>
                        <div className='mr-4'>
                            <RiMessage2Line className='text-gray-500 h-6 w-16' />
                        </div>
                    </div>
                    <div className='border w-1/2 '>
                        <div className='relative  flex'>
                            <div className='flex items-center cursor-pointer' onClick={toggleDropdown}>
                                <label htmlFor='profile-picture-input'>
                                    {profilePicture ? (
                                        <img src={profilePicture} alt='Profile' className='rounded-full h-6 w-16 my-2 cursor-pointer' />
                                    ) : (
                                        <div className='rounded-full h-8 w-8 m-2 my-2 bg-gray-300 flex items-center justify-center cursor-pointer'>
                                            {/* profile Picture */}
                                        </div>
                                    )}
                                </label>
                                <input
                                    type='file'
                                    id='profile-picture-input'
                                    accept='image/*'
                                    onChange={handleProfilePictureChange}
                                    style={{ display: 'none' }}
                                />
                                <span className='ml-2 text-sm font-medium flex'>{adminName}</span>
                                <RiArrowDownSLine onClick={toggleDropdown} className='text-gray-500 h-4 w-5 ml-1 ml-32 border cursor-pointer' />
                            </div>
                        </div>
                        {showDropdown && (
                            <div className='absolute bg-white border rounded-lg mt-1 p-2'>
                                <div onClick={handleAdminNameChange} className='cursor-pointer'>
                                    Change Admin Name
                                </div>
                                <div className='cursor-pointer' onClick={toggleProfileDropdown}>
                                    My Profile
                                </div>
                                <div className='cursor-pointer' onClick={NotificationDropdown}>
                                    Notification

                                </div>
                                <div className='cursor-pointer' onClick={MyreviewDropdown}>
                                    My Review

                                </div>
                                <div className='cursor-pointer' onClick={SettingsDropdown}>
                                    Settings

                                </div>
                                <div className='cursor-pointer' onClick={LogoutDropdown}>
                                    Logout

                                </div>
                                {showProfileDropdown && (
                                    <div>
                                        {/* Profile dropdown content */}
                                    </div>
                                )}
                                {notificationDropdown && (
                                    <div >
                                        {/* Profile dropdown content */}


                                    </div>
                                )}

                                {myreviewDropdown && (
                                    <div>
                                        {/* Profile dropdown content */}


                                    </div>
                                )}
                                {settingsDropdown && (
                                    <div>
                                        {/* Profile dropdown content */}


                                    </div>
                                )}
                                {logoutDropdown && (
                                    <div>
                                        {/* Profile dropdown content */}


                                    </div>
                                )}


                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
