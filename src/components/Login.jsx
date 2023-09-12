import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './App.css'
function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [status, setStatus] = useState('')
	const [rememberMe, setRememberMe] = useState(false)
	const [invalidPasswordError, setInvalidPasswordError] = useState(false)

	const handleRememberMeChange = () => {
		setRememberMe(!rememberMe)
	}
	const endPoint = process.env.REACT_APP_BASE_URL
	const handleLogin = async () => {
		try {
			// http://${endPoint}:8000/core/login/
			const response = await axios.post(`http://172.20.10.2:8000/core/login/`, {
				//env file url
				email,
				password,
			})

			if (response.status === 200) {
				const user = response.data
				console.log('@@@@@@@@@@@', response.data)
				setStatus('Login successful!')
				localStorage.setItem('user-token', response.data.jwt)
				localStorage.setItem('is_admin', response.data.is_admin)

				localStorage.setItem('user', JSON.stringify(user))

				setTimeout(() => {
					window.location.href = '/Dashboard'
				}, 500)

				if (rememberMe) {
					localStorage.setItem('rememberedEmail', email)
					localStorage.setItem('rememberedPassword', password)
				}
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
				console.log('error', error.response)
				setStatus(error.response.data.detail)
			}
		}
	}
	useEffect(() => {
		const rememberedEmail = localStorage.getItem('rememberedEmail')
		const rememberedPassword = localStorage.getItem('rememberedPassword')

		if (rememberedEmail && rememberedPassword) {
			setEmail(rememberedEmail)
			setPassword(rememberedPassword)
			setRememberMe(true)
		}
	}, [])

	return (
		<div className="login-wrapper">
			<div className="cover-container">
				<div className="App.login">
					<div className="login-container">
						<div className="login-icon-container ">
							<i className="fas fa-user-circle fa-lg cursor-pointer rounded-full h-16 w-16 cursor-pointer"></i>

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

							<button
								className="bg-blue-600 scale-100 active:scale-90 focus:scale-90 focus:bg-blue-500 text-white text-xl font-medium"
								onClick={handleLogin}
							>
								Login
							</button>
							<div className="w-4"></div>
							<Link to="/password-reset-request">Forgot Password?</Link>

							<p className="status">{status}</p>
							{invalidPasswordError && (
								<p className="error-message">Invalid password.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
