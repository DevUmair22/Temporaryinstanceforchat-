import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { MdSupervisorAccount } from 'react-icons/md'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './sidbar.css'
export default function Sidebar() {
	let newUser = localStorage.getItem('user')
	console.log('new', newUser)
	const [isAdmin, setIsAdmin] = useState(false)
	const navigate = useNavigate()
	const location = useLocation()
	console.log('===location  side', location)
	const user = location.state.user
	console.log('userrr', user)
	const simpleUser = [
		{
			title: 'DashBoard',
			icon: <FontAwesomeIcon icon={faHome} className="text-xl text-white" />,
			link: '/dashboard',
		},
		{
			title: 'Update Profile',
			icon: <MdSupervisorAccount className="text-xl text-white" />,
			link: '/update',
		},
	]
	const superUser = [
		{
			title: 'DashBoard',
			icon: <FontAwesomeIcon icon={faHome} className="text-xl text-white" />,
			link: '/Dashboard',
		},
		{
			title: 'All Users',
			icon: <MdSupervisorAccount className="text-xl text-white" />,
			link: '/home',
		},
	]
	useEffect(() => {
		// Retrieve the is_admin value from localStorage and correctly parse it as a boolean
		const isAdminFromLocalStorage = localStorage.getItem('is_admin') === 'true'

		// Set the isAdmin state with the retrieved value
		setIsAdmin(isAdminFromLocalStorage)
		console.log('isAdminFromLocalStorage:', isAdminFromLocalStorage)
		console.log('isAdmin:', isAdminFromLocalStorage)
	}, [])
	const handleUpdate = () => {
		let user = localStorage.getItem('user')
		user = JSON.parse(user)
		navigate('/update', { state: { user } })
	}
	return (
		<div className=" bg-[#2E2E48] h-full w-full p-4 flex rounded-l-md items-center text-left">
			<div className="flex flex-col flex-wrap items-left pl-6">
				{!isAdmin
					? simpleUser.map((item) => (
							<div className="my-6 w-full flex flex-wrap items-start ">
								<Link className="flex items-center " to={item.link}>
									{item.icon}
									<p className="text-xl text-white px-2 pt-1">{item.title}</p>
								</Link>
							</div>
					  ))
					: superUser.map((item) => (
							<div className="my-6 w-full flex flex-wrap items-start ">
								<Link className="flex items-center " to={item.link}>
									{item.icon}
									<p className="text-xl text-white px-2 pt-1">{item.title}</p>
								</Link>
							</div>
					  ))}
			</div>
		</div>
	)
}
