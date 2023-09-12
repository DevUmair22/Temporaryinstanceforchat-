import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom' // Import useNavigate and Link
import './App.css'
import './passwordreset.css'

function Passwordresetrequest() {
	const navigate = useNavigate() // Use useNavigate

	// const [popupVisible, setPopupVisible] = useState(false);
	// const [popupMessage, setPopupMessage] = useState('');

	const [email, setEmail] = useState('')
	const [status, setStatus] = useState('')

	const handleResetRequest = async () => {
		if (!email) {
			setStatus('All fields are required.')
			return
		} else if (
			!email.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			)
		) {
			setStatus('invalid email')
			return
		}
		try {
			const response = await axios.post(
				'http://172.20.10.2:8000/core/password/reset/request/',
				{
					email,
				}
			)

			if (response.status === 200) {
				alert('Password reset email sent. Please check your inbox.')
				// setPopupMessage('Password reset email sent. Please check your inbox.');
				// setPopupVisible(true);
				// Navigate to password reset page
				navigate(`/login`)
				// navigate(`/reset-password/${response.data.token}`);
			}
		} catch (error) {
			// setPopupMessage('Invalid email.');
			// setPopupVisible(true);
		}
	}

	return (
		<div className="box">
			<div className="back">
				<div className="password-reset">
					<h2>Forgot Password</h2>
					<p>Enter your email address to request a password reset.</p>
					<br />
					<input
						className="enter-email"
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<br />
					<button onClick={handleResetRequest}>Request Reset</button>
					<p>{status}</p>
					<Link to="/login">Back to Login</Link>
				</div>
			</div>
			{/* {popupVisible && (
                <div className='popup'>
                    <p>{popupMessage}</p>
                    <button onClick={() => setPopupVisible(false)}>Close</button>
                </div>
            )} */}
		</div>
	)
}

export default Passwordresetrequest
