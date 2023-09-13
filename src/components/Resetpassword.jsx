import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './resetpassword.css'

function PasswordReset() {
	// const { token } = useParams();
	const endPoint = process.env.REACT_APP_BASE_URL
	const [password, setPassword] = useState('')
	const [token, setToken] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [status, setStatus] = useState('')

	const handleReset = async () => {
		if (!password && !confirmPassword) {
			setStatus('All field are required')
			return
		} else if (password !== confirmPassword) {
			setStatus('Password not matched')
		} else if (password.length < 8 && !password.match(/[!@#%^&*]/)) {
			setStatus(
				`Password must be at least 8 characters long. Must contains 1 Capital Albhabet and 1 SPecial Chracter.`
			)
			return
		} else {
			try {
				if (password === confirmPassword) {
					// setStatus("empty")
					console.log('first', password)

					const response = await axios.post(
						`http://${endPoint}:8000/core/password/reset/`,
						{
							token,
							password: password,
						}
					)

					if (response.status === 200) {
						setStatus('Password reset successfully.')
					}
				} else {
					setStatus('Passwords do not match.')
				}
			} catch (error) {
				// console.log('error----------',error)                // console.log('hsdhskhds---',response)

				setStatus('An error occurred during registration')
			}
		}
	}
	useEffect(() => {
		const queryparam = new URLSearchParams(window.location.search)
		const gettoken = queryparam.get('token')
		if (gettoken !== null && gettoken !== undefined) {
			setToken(gettoken)
		}
	}, [])
	return (
		<div className="box">
			<div className="back">
				<div className="password-reset">
					<h2>Password Reset</h2>
					<p>Enter your new password.</p>
					<input
						className="newpass"
						type="password"
						placeholder="New Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<input
						className="conformpass"
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<br />

					<button onClick={handleReset}>Reset Password</button>
					<br />
					<p>{status}</p>
					<Link to="/login">Back to Login</Link>
				</div>
			</div>
		</div>
	)
}

export default PasswordReset
