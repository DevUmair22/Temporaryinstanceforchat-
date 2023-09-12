import React from 'react'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
	const navigate = useNavigate()

	const handleLogout = () => {
		// Perform any logout-related tasks here
		// For example, clear user session, tokens, or any other data

		// Clear localStorage or session storage data

		localStorage.clear() // localStorage.removeItem('user-token', response.data.jwt);

		// Navigate to the login page
		navigate('/login')
	}

	return (
		<div className="flex  w-full justify-center items-center h-screen">
			<div className="mx-auto flex-col flex-wrap">
				{' '}
				<h2 className="text-3xl text-blue-500 py-1font-semibold ">Logout</h2>
				<p>Are you sure you want to log out?</p>
				<button
					onClick={handleLogout}
					className="bg-blue-500 focus:scale-90 text-white text-xl"
				>
					Logout
				</button>
			</div>
		</div>
	)
}
export default Logout
