import React from 'react'

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
		<div className="h-full bg-white rounded-b-lg w-full p-4 flex flex-col justify-center items-center">
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
			<span className="text-white">Rightblock</span>
		</div>
	)
}
