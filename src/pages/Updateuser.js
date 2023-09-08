// import React, { useState } from 'react';
// import axios from 'axios';
// import { RiArrowDownSLine } from 'react-icons/ri';
// import { useLocation } from 'react-router-dom';

// import Vactor from '../assets/vactor.png'
// // import './reg.css'

// // function Updateuser() {
// //     const [name, setname] = useState('');
// //     const [email, setEmail] = useState('');
// //     const [phone_number, setPhone_number] = useState('');
// //     const [department, setDepartment] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [status, setStatus] = useState('');
// //     const [profilePicture, setProfilePicture] = useState(null);

// //     const [showDropdown, setShowDropdown] = useState(false);
// //     const [invalidNameError, setInvalidNameError] = useState(false); // New state for invalid name
// //     const [departments, setDepartments] = useState(['Sales', 'Technical', 'Marketing', 'Finance']); // Sample departments Sales, Technical, Marketing, and Finance.
// //     const toggleDropdown = () => {
// //         setShowDropdown(!showDropdown);
// //     };

    
// //     const handleUpdate = async () => {
// //         if (name || email || phone_number || department || password) {
// //             // setStatus('All fields are required.');
// //             return;
// //         } else if (!name.match(/^[a-zA-Z]*$/)) {
// //             setStatus("Name HSould be Alphabet")
// //             return;
// //         }
// //         else if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
// //             setStatus("invalid email")
// //             return;
// //         }
// //         else if (!phone_number.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
// //             setStatus("invalid phone")
// //             return;
// //         }
// //         else if (password.length < 8 && !password.match(/[!@#%^&*]/)) {
// //             setStatus("invalid password")
// //             return;
// //         }

// //         try {
// //             const response = await axios.post('http://192.168.81.173:8000/core/register/', {
// //                 name,
// //                 email,
// //                 phone_number,
// //                 department,
// //                 password
// //             });

// //             if (response.status === 200) {
// //                 setStatus('Updateuser successful!');

// //                 setname('');
// //                 setEmail('');
// //                 setPhone_number('');
// //                 setDepartment('');
// //                 setPassword('');
// //             } else {
// //                 console.log("first", response)
// //                 setStatus('updated failed.');

// //             }
// //         } catch (error) {
// //             if (error.response && error.response.status === 400) {
// //                 if (error.response.data.email && error.response.data.email[0] === 'Enter a valid email address.') {
// //                     setStatus('Email is incorrect.');
// //                 } else if (error.response.data.email && error.response.data.email[0] === 'user with this email already exists.') {
// //                     setStatus('user already exists.');

// //                     setInvalidNameError(true); // Set the invalid name error

// //                 }
// //                 // else if (error.response.data.detail === 'Unable to log in with provided credentials.') {
// //                 //     setStatus('Invalid password.');
// //                 // }
// //                 else if (error.response && error.response.status === 403) {
// //                     setStatus(error?.response?.data?.detail);
// //                 }
// //                 else {
// //                     setStatus('Password must be at least 8 characters long....');
// //                     // setStatus('Name should contain only alphabetical characters..');
// //                     // setStatus('Name should contain only alphabetical characters..');
// //                     // setStatus('Password must be at least 8 characters long.');

// //                 }
// //             } else {
// //                 setStatus('An error occurred during registration.');
// //             }
// //         }
// //     };

// const UpdatePage = (props) => {
//     const location = useLocation();
//     const user = location.state.user;

//     const [name, setName] = useState(user.name);
//     const [email, setEmail] = useState(user.email);
//     const [phoneno, setPhoneno] = useState(user.email);


//     const handleNameChange = (e) => {
//         setName(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };
//     const handlePhonenoChange = (e) => {
//         setPhoneno(e.target.value);
//     };

//     const handleUpdate = async () => {
//         try {
//             const updatedUser = {
//                 ...user,
//                 name: name,
//                 email: email,
//                 phoneno:phoneno
//             };

//             let requestData = JSON.stringify(updatedUser);

//             let config = {
//                 method: 'PUT',
//                 url: `http://192.168.81.173:8000/core/user/${user.id}/`,
                
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 data: requestData
//             };

//             axios.request(config)
//                 .then((response) => {
//                     console.log(JSON.stringify(response.data));

//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
//             // Send update request to backend with updated user data
//             // const response = await axios.put(`http://192.168.81.173:8000/core/user/${user.id}`, updatedUser);
//             // console.log(response)


//             // Handle response and update user in parent component's state
//             // Redirect back to the main page after successful update

//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };
//     // const handleRegistration = () => {

//     //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
//     //         console.log(response)
//     //     )
//     // }
//     const handleProfilePictureClick = () => {
//         const input = document.getElementById('profile-picture');
//         if (input) {
//             input.click();
//         }
//     };

//     const handleProfilePictureChange = (selectedFile) => {
//         if (selectedFile) {
//             const imageUrl = URL.createObjectURL(selectedFile);
//             setProfilePicture(imageUrl);
//         }
//     };
//     let bg = { Vactor };


//     return (
//         <div className='borderapp'>
//             <div className="Appuser">
//                 <div className="registration-container">
//                     <div className='add'>
//                         {/* <i className="fas fa-user-circle fa-lg cursor-pointer rounded-full h-16 w-16 cursor-pointer"></i> */}
//                         <div className="profile-icon login-image-icon " onClick={handleProfilePictureClick}>
//                             {profilePicture ? (
//                                 <img src={profilePicture} alt="Profile" className="rounded-full h-16 w-16 cursor-pointer" />
//                             ) : (
//                                 <i className="fas fa-user-circle fa-lg rounded-full h-16 w-16 cursor-pointer "></i>
//                             )}
//                         </div>
//                         {/* <h2>Add User</h2> */}
//                     </div>
//                     <div className="input-container">
//                     <input type="text" value={name} onChange={handleNameChange} />

//                     </div>

//                     {/* {invalidNameError && <p className="error-message">Name should contain only alphabetical characters.</p>} */}
//                     {/* <div className="input-container">
//                     <input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
//                 </div> */}
//                     {/* <div className="input-container">
//                     <i className="fas fa-user"></i>
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         placeholder="Username"
//                     />
//                 </div> */}
//                     <div className="input-container">
//                     <input type="email" value={email} onChange={handleEmailChange} />

//                     </div>
//                     <div className="input-container">
//                     <input type="phoneno" value={phoneno} onChange={handlePhonenoChange} />
//                     </div>
//                     <div className="input-container">

//                         <input
//                             type="text"
//                             value={department}
//                             onChange={(e) => setDepartment(e.target.value)}
//                             placeholder="Department*" onFocus={toggleDropdown}
//                             onBlur={toggleDropdown}

//                         />
//                         {/* <RiArrowDownSLine
//                             onClick={toggleDropdown}
//                             className='absolute right-2 top-5 transform -translate-y-1/2 text-gray-500 h-8 w-5 cursor-pointer'
//                         /> */}
//                     </div>
//                     {showDropdown && (
//                         <div className='absolute z-10 bg-[#E5F1FD] border rounded-lg mt-3 p-2 w-72  '>
//                             {departments.map((dept, index) => (
//                                 <div
//                                     key={index}
//                                     className='cursor-pointer'
//                                     onClick={() => {
//                                         setDepartment(dept);
//                                         setShowDropdown(false);
//                                     }}
//                                 >
//                                     {dept}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                     {/* <div className="input-container">
//                         <input
//                             type="text"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="password*"
//                         />
//                     </div> */}
//                     <button onClick={handleUpdate}>Update</button>
//                     <p className="status">{status}</p>
//                 </div>
//                 <input
//                     type="file"
//                     id="profile-picture"
//                     accept="image/*"
//                     onChange={(e) => handleProfilePictureChange(e.target.files[0])}
//                     style={{ display: 'none' }}
//                 />
//             </div>
//         </div>
//     );
// }

// export default Updateuser;
