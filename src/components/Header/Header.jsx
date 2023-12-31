import React, { useEffect, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosSearch } from 'react-icons/io'
import {
	RiArrowDownSLine,
	RiMessage2Line,
	RiNotification2Line,
} from 'react-icons/ri'
import { useNavigate } from 'react-router-dom' // Import useNavigate
import './header.css'
export default function Header(props) {
	const [profilePicture, setProfilePicture] = useState('')
	const [currentUser, setCurrentUser] = useState('User')
	const [adminName, setAdminName] = useState('ijlal shah')
	const [showDropdown, setShowDropdown] = useState(false)
	const [myreviewDropdown, setMyreviewDropdown] = useState(false)
	const [settingsDropdown, setSettingsDropdown] = useState(false)
	const [logoutDropdown, setLogoutDropdown] = useState(false)

	const [notificationDropdown, setNotificationDropdown] = useState(false)
	const navigate = useNavigate()

	const [showProfileDropdown, setShowProfileDropdown] = useState(false)
	useEffect(() => {
		const user = localStorage.getItem('user')

		console.log('========>', JSON.parse(user))

		console.log('first', user)

		if (user) setCurrentUser(JSON.parse(user))
		setProfilePicture(currentUser?.profilePicture)
	}, [])
	const toggleDropdown = () => {
		setShowDropdown(!showDropdown)
	}

	const toggleProfileDropdown = () => {
		setShowProfileDropdown(!showProfileDropdown)
	}
	const NotificationDropdown = () => {
		setNotificationDropdown(!NotificationDropdown)
	}
	const MyreviewDropdown = () => {
		setMyreviewDropdown(!MyreviewDropdown)
	}
	const SettingsDropdown = () => {
		setSettingsDropdown(!SettingsDropdown)
	}
	const LogoutDropdown = () => {
		setLogoutDropdown(!LogoutDropdown)
		navigate('/logout')
	}

	const handleAdminNameChange = () => {
		const newName = prompt('Enter new admin name:')
		if (newName) {
			setAdminName(newName)
		}
	}
	const handleProfilePictureChange = (event) => {
		const selectedFile = event.target.files[0]
		if (selectedFile) {
			const imageUrl = URL.createObjectURL(selectedFile)
			setProfilePicture(imageUrl)
		}
	}

	return (
		<div className="bg-white h-full w-full px-2 flex flex-wrap justify-around rounded-tr-xl shadow-xl border">
			<div className="flex items-center w-2/4 py-6 px-16 justify-center">
				<div className=" flex items-center w-full border-gray-300 border shadow-md border-1 rounded-md bg-gray-100 h-1/2 ">
					<IoIosSearch className="text-sky-600 h-full text-center w-1/6 bg-gray-200 px-3 " />
					<input
						type="text"
						className="border-none h-full text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 bg-gray-50 pl-4 m-0 placeholder:text-gray-500 w-full"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="flex items-center w-2/4 py-3 justify-center px-3">
				<div className="flex flex-wrap w-4/6 justify-end px-4">
					<div className="px-2">
						<RiNotification2Line className="text-gray-500 h-6 w-6  " />
					</div>
					<div className="px-2">
						<RiMessage2Line className="text-gray-500 h-6 w-6" />
					</div>
				</div>
				<div className=" w-2/6 ">
					<div className=" flex justify-end">
						<div
							className="flex flex-wrap items-center justify-center cursor-pointer border rounded-md w-full bg-gray-50 shadow-md"
							onClick={toggleDropdown}
						>
							<div className="w-2/6 py-2 pl-2">
								{currentUser.profilePicture ? (
									<img
										className=" rounded-full  "
										src={profilePicture}
										alt="profile"
									/>
								) : (
									<CgProfile className="w-14 h-14" />
								)}
							</div>
							<span className="w-3/6 text-md font-medium pl-3">
								{currentUser?.name}
							</span>
							<div className="h-full w-1/6 py-6 ">
								<RiArrowDownSLine
									onClick={toggleDropdown}
									className="text-gray-500 text-xl cursor-pointer"
								/>
							</div>
						</div>
					</div>
					{showDropdown && (
						<div className="absolute bg-white border rounded-lg p-4 text-md w-48 divide-y">
							{/* <div
								className="py-1 cursor-pointer"
								onClick={toggleProfileDropdown}
							>
								My Profile
							</div>
							<div
								className=" py-1 cursor-pointer"
								onClick={NotificationDropdown}
							>
								Notification
							</div>
							<div className="py-1 cursor-pointer" onClick={MyreviewDropdown}>
								My Review
							</div>
							<div className="py-1 cursor-pointer" onClick={SettingsDropdown}>
								Settings
							</div> */}
							<div
								className=" py-1 cursor-pointer hover:text-blue-600 w-full"
								onClick={LogoutDropdown}
							>
								Logout
							</div>
							{showProfileDropdown && (
								<div>{/* Profile dropdown content */}</div>
							)}
							{notificationDropdown && (
								<div>{/* Profile dropdown content */}</div>
							)}

							{myreviewDropdown && <div>{/* Profile dropdown content */}</div>}
							{settingsDropdown && <div>{/* Profile dropdown content */}</div>}
							{logoutDropdown && <div>{/* Profile dropdown content */}</div>}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
