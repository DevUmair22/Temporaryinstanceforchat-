import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
// import { useHistory } from "react-router-dom";
// import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom' // Import useNavigate

// import {  Redirect } from 'react-router-dom'; // Import Router and other components

import Vactor from '../assets/vactor.png'
import './App.css'
function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [status, setStatus] = useState('')
	const [admin, setAdmin] = useState('false')
	const [profilePicture, setProfilePicture] = useState(null)
	const [loggedIn, setLoggedIn] = useState(false)
	const [rememberMe, setRememberMe] = useState(false)
	const [invalidPasswordError, setInvalidPasswordError] = useState(false)
	const [errorMessages, setErrorMessages] = useState({})
	const [isSubmitted, setIsSubmitted] = useState(false)
	const navigate = useNavigate() // Get the navigate function from the hook
	// State for login status

	// const [loggedIn, setLoggedIn] = useState(false); // New state for login status

	// const Dashbord = () => {
	//     history.push("/dashbord")
	// }
	// const renderErrorMessage = (name) =>
	//     name === errorMessages.name && (
	//         <div className="error">{errorMessages.message}</div>
	//     );
	const handleRememberMeChange = () => {
		setRememberMe(!rememberMe)
	}

	const handleLogin = async () => {
		try {
			const response = await axios.post(
				'http://172.20.17.81:8000/core/login/',
				{
					//env file url
					email,
					password, // const history = useHistory();
				}
			)
			const user = response.data
			if (response.status === 200) {
				// console.log("first,", response)
				console.log('check token', response)
				// window.location.href = '/Dashboard';
				setStatus('Login successful!')
				localStorage.setItem('user-token', response.data.jwt)
				// localStorage.removeItem('user-token', response.data.jwt);
				if (user.isAdmin === true) {
					setTimeout(() => {
						navigate('/home', {
							state: { admin: user },
						})
					}, 500)
				} else {
					setTimeout(() => {
						window.location.href = '/Dashboard'
					}, 500)
				}
				if (rememberMe) {
					localStorage.setItem('rememberedEmail', email)
					localStorage.setItem('rememberedPassword', password)
					//   localStorage.checkbox = isChecked;
				}
				// navigate('/dashbord');

				// history.push('/dashbord');
			} else {
				setStatus('AddUser failed. Please check your credentials.')
			}
		} catch (error) {
			if (error.response && error.response.status === 401) {
				if (
					error.response.data.detail ===
					'No active account found with the given credentials'
				) {
					setStatus(error?.response?.data?.detail)
					setInvalidPasswordError(true) // Set the invalid password error
				} else if (
					error.response.data.detail ===
					'Unable to log in with provided credentials.'
				) {
					setStatus('Invalid password or email.')
				}
			} else if (error.response && error.response.status === 400) {
				setStatus(error?.response?.data?.detail)
			} else {
				setStatus('Invalid password or email.')
			}
		}
	}
	useEffect(() => {
		const rememberedEmail = localStorage.getItem('rememberedEmail')
		const rememberedPassword = localStorage.getItem('rememberedPassword')
		// useEffect(() => {
		// const timeout = setTimeout(() => {
		//     // 👇️ redirects to an external URL
		//     window.location.replace('http://localhost:3000/Dashbord');
		// }, 1000);

		//     return () => clearTimeout(timeout);
		//   }, []);
		// const rememberedEmail = localStorage.removeItemItem('rememberedEmail');
		// const rememberedPassword = localStorage.removeItem('rememberedPassword');

		if (rememberedEmail && rememberedPassword) {
			setEmail(rememberedEmail)
			setPassword(rememberedPassword)
			setRememberMe(true) // Check the "Remember Me" checkbox
		}
	}, [])
	// if (loggedIn) {error.response.data.detail
	//     return <Redirect to="/dashboard" />; // Redirect after successful login
	//   }

	const handleProfilePictureClick = () => {
		const input = document.getElementById('profile-picture')
		if (input) {
			input.click()
		}
	}

	const handleProfilePictureChange = (selectedFile) => {
		if (selectedFile) {
			const imageUrl = URL.createObjectURL(selectedFile)
			setProfilePicture(imageUrl)
		}
	}
	let bg = { Vactor }

	return (
		// <div className="cover-container" style={{
		//     backgroundImage: `url("${Vactor}")`,
		//     height: "300px", backgroundRepeat: "no-repeat"
		// }} >
		<div className="login-wrapper">
			<div className="cover-container">
				<div className="App.login">
					<div className="login-container">
						{/* <div className="profile-icon">
                            <i className="fas fa-user-circle fa-lg"></i>
                        </div> */}
						<div className="login-icon-container ">
							<i className="fas fa-user-circle fa-lg cursor-pointer rounded-full h-16 w-16 cursor-pointer"></i>
							{/* <div className="profile-icon login-image-icon" onClick={handleProfilePictureClick}>
                                {profilePicture ? (
                                    <img src={profilePicture} alt="Profile" className="rounded-full h-16 w-16 cursor-pointer" />
                                ) : (
                                    <i className="fas fa-user-circle fa-lg cursor-pointer"></i>
                                )}
                            </div> */}
							<h2 className="login">Login</h2>
						</div>
						<div className="input-fields">
							<div className="input-container">
								<i className="fas fa-user"></i>
								<input
									className="user"
									type="text"
									id="username"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Username"
								/>
								{/* {renderErrorMessage("email")} */}
							</div>

							<br />
							<div className="input-container">
								<input
									className="pass"
									type={showPassword ? 'text' : 'password'}
									id="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									placeholder="Password"
								/>
								<i
									className={`toggle-password fas ${
										showPassword ? 'fa-eye-slash' : 'fa-eye'
									}`}
									onClick={() => setShowPassword(!showPassword)}
								></i>
								{/* {renderErrorMessage("pass")} */}
							</div>
							<div className="text-start pt-10 flex items-center">
								<input
									className="w-7 h-4 m-0"
									type="checkbox"
									checked={rememberMe}
									onChange={handleRememberMeChange}
								/>
								<label for="RememberMe">Remember Me</label>
							</div>
							<button class="login-button" onClick={handleLogin}>
								Login
							</button>
							<div className="w-4"></div>
							<Link to="/password-reset-request">Forgot Password?</Link>

							<p className="status">{status}</p>
							{invalidPasswordError && (
								<p className="error-message">Invalid password.</p>
							)}

							<input
								type="file"
								id="profile-picture"
								accept="image/*"
								onChange={(e) => handleProfilePictureChange(e.target.files[0])}
								style={{ display: 'none' }}
							/>
						</div>
					</div>
				</div>
				{/* {loggedIn && <Redirect to="/dashboard" />} Redirect after successful login */}
			</div>
		</div>
	)
}

export default Login
