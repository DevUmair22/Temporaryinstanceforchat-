import React, { useState } from 'react';

export default function Rightblock() {
    // const [profilePicture, setProfilePicture] = useState(null);

    // const handleProfilePictureChange = (event) => {
    //     const selectedFile = event.target.files[0];
    //     if (selectedFile) {
    //         const imageUrl = URL.createObjectURL(selectedFile);
    //         setProfilePicture(imageUrl);
    //     }
    // };

    return (
        <div style={{
            background: ' #FFFFFF'
            , marginTop: '120px', marginLeft: '48px'
        }} className='h-5/6 rounded-lg w-32 p-4 flex flex-col justify-center items-center'>
            {/* <label htmlFor='profile-picture-input'>
                {profilePicture ? (
                    <img src={profilePicture} alt='Profile' className='rounded-full h-16 w-16 mb-2 cursor-pointer' />
                ) : (
                    <div className='rounded-full h-16 w-16 mb-2 bg-gray-300 flex items-center justify-center cursor-pointer'>
                        Click to Add Picture
                    </div>
                )}
            </label> */}
            {/* <input
                type='file'
                id='profile-picture-input'
                accept='image/*'
                onChange={handleProfilePictureChange}
                style={{ display: 'none' }}
            /> */}
            <span className='text-white'>Rightblock</span>
        </div>
    );
}
