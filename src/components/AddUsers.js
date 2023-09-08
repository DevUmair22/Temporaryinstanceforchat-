import React, { useState } from 'react';
import axios from 'axios';
import { RiArrowDownSLine } from 'react-icons/ri';
import './reg.css'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function AddUsers() {
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');
    const [department, setDepartment] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [invalidNameError, setInvalidNameError] = useState(false); // New state for invalid name
    const [departments, setDepartments] = useState(['Sales', 'Technical', 'Marketing', 'Finance']); // Sample departments Sales, Technical, Marketing, and Finance.
   

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const navigate = useNavigate(); // Get the navigate function from the hook

    const handleRegistration = async () => {

        if (!name || !email || !phone_number || !department || !password) {
            setStatus('All fields are required.');
            return;
        } else if (!name.match(/^[a-zA-Z]*$/)) {
            setStatus("Name HSould be Alphabet")
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
        else if (password.length < 8 && !password.match(/[!@#%^&*]/)) {
            setStatus("invalid password")
            return;
        }

        try {
            const response = await axios.post('http://172.20.17.81:8000/core/register/', { //env file
                name,
                email,
                phone_number,
                department,
                password
            });

            if (response.status === 200) {
                setStatus('Adduser successful!');
                navigate('/home');


                setname('');
                setEmail('');
                setPhone_number('');
                setDepartment('');
                setPassword('');

            } else {
                console.log("first", response)
                setStatus('Registration failed.');

            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                if (error.response.data.email && error.response.data.email[0] === 'Enter a valid email address.') {
                    setStatus('Email is incorrect.');
                } else if (error.response.data.email && error.response.data.email[0] === 'user with this email already exists.') {
                    setStatus('user already exists.');

                    setInvalidNameError(true); // Set the invalid name error

                }
                else if (error.response.data.detail === 'Unable to log in with provided credentials.') {
                    setStatus('Invalid password.');
                }
                else if (error.response && error.response.status === 403) {
                    setStatus(error?.response?.data?.detail);
                }
                else {
                    setStatus('Password must be at least 8 characters long....');
                    // setStatus('Name should contain only alphabetical characters..');
                    // setStatus('Name should contain only alphabetical characters..');
                    // setStatus('Password must be at least 8 characters long.');

                }
            } else {
                setStatus('An error occurred during registration.');
            }
        }
    };


    // const handleRegistration = () => {

    //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then((response) =>
    //         console.log(response)
    //     )
    // }


    const _hanldeOnChangeName = (e) => {
        setname(e.target.value)
        if (!e.target.value.match(/^[a-zA-Z]*$/)) {
            setStatus("Name Should be Alphabet")
            return;
        } else {
            setStatus('')
        }
    }
    const _hanldeOnChangeEmail = (e) => {
        setEmail(e.target.value)
        if (!e.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setStatus("invalid email")
            return;
        } else {
            setStatus('')
        }
    }
    const _hanldeOnChangePhoneno = (e) => {
        setPhone_number(e.target.value)
        if (!e.target.value.match(/^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/)) {
            setStatus("invalid phone")
            return;
        } else {
            setStatus('')
        }
    }
    const _hanldeOnChangePassword = (e) => {
        setPassword(e.target.value)
        if (password.length < 8 && !password.match(/[!@#%^&*]/)) {
            setStatus("Password must be at least 8 characters long. Must contains 1 Capital Albhabet and 1 SPecial Chracter")
            return;

        } else {
            setStatus('')
        }
    }

    return (
        <div className='borderapp'>
            <div className="Appuser">
                <div className="registration-container">
                    <div className='add'>
                        <h2>Add User</h2>
                    </div>
                    <div className="input-container">
                        <input type='text' value={name} onChange={_hanldeOnChangeName} placeholder='Name*' />

                    </div>

                    {/* {invalidNameError && <p className="error-message">Name should contain only alphabetical characters.</p>} */}
                    {/* <div className="input-container">
                    <input type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' />
                </div> */}
                    {/* <div className="input-container">
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </div> */}
                    <div className="input-container">
                        <input
                            type="email"
                            value={email}
                            onChange={_hanldeOnChangeEmail}
                            placeholder="Email* "

                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="phone"
                            value={phone_number}
                            onChange={_hanldeOnChangePhoneno}
                            placeholder="Contact no *"
                        />
                    </div>
                    <div className="input-container">

                        <input
                            type="text"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            placeholder="Department*" onFocus={toggleDropdown}
                            onBlur={toggleDropdown}

                        />
                        <RiArrowDownSLine
                            onClick={toggleDropdown}
                            className='absolute right-2 top-5 transform -translate-y-1/2 text-gray-500 h-8 w-5 cursor-pointer'
                        />
                    </div>
                    {showDropdown && (
                        <div className='absolute z-10 bg-[#E5F1FD] border rounded-lg mt-3 py-2 w-60 divide-y-2 divide-blue-500 '>
                            {departments.map((dept, index) => (
                                <div
                                    key={index}
                                    className='cursor-pointer'
                                    onClick={() => {
                                        setDepartment(dept);
                                        setShowDropdown(false);
                                    }}
                                >
                                    {dept}
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="input-container">
                        <input
                            type="text"
                            value={password}
                            onChange={_hanldeOnChangePassword}
                            placeholder="password*"
                        />
                    </div>
                    <button onClick={handleRegistration}>AddUsers</button>
                    <p className="status">{status}</p>
                </div>
            </div>
        </div>
    );
}

export default AddUsers;
