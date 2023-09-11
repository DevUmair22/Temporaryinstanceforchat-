import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsCalendarCheck, BsPlusCircleFill } from 'react-icons/bs'
import { MdSupervisorAccount } from 'react-icons/md'
import { Link } from 'react-router-dom'
import './sidbar.css'
export default function Sidebar() {
	const [hoveredIcon, setHoveredIcon] = useState(null)
	const [dashboard, setDashboard] = useState()

	const handleIconHover = (icon) => {
		setHoveredIcon(icon)
	}

	return (
		<div className=" bg-[#2E2E48] h-full w-full p-4 flex rounded-l-md items-center text-left">
			<div className="flex flex-col flex-wrap items-left pl-6">
				<div
					className="my-6 w-full flex flex-wrap items-start "
					onMouseEnter={() => setDashboard('home')}
					onMouseLeave={() => handleIconHover(null)}
				>
					<Link className="flex items-center " to={'/Dashboard'}>
						<FontAwesomeIcon icon={faHome} className="text-xl text-white" />
						<p className="text-xl text-white px-2 pt-1">Home</p>
					</Link>
				</div>
				<div
					className="my-6 w-full flex flex-wrap items-start "
					onMouseEnter={() => handleIconHover('user')}
					onMouseLeave={() => handleIconHover(null)}
				>
					<Link className="flex items-center " to={'/user'}>
						<BsPlusCircleFill className="text-xl text-white" />
						<p className="text-xl text-white px-2  pt-1">Add User</p>
					</Link>
				</div>
				{/* <div
					className="my-6 w-full flex flex-wrap items-start "
					onMouseEnter={() => handleIconHover('cog')}
					onMouseLeave={() => handleIconHover(null)}
				>
					<Link className="flex items-center " to={'/'}>
						<FontAwesomeIcon icon={faCog} className="text-xl text-white" />
						<p className="text-xl text-white px-2  pt-1">Manage</p>
					</Link>
				</div> */}
				<div
					className="my-6 w-full flex flex-wrap items-start "
					onMouseEnter={() => handleIconHover('calendar')}
					onMouseLeave={() => handleIconHover(null)}
				>
					<Link className="flex items-center " to={'/login'}>
						<BsCalendarCheck className="text-xl text-white" />
						<p className="text-xl text-white px-2  pt-1">Activity</p>
					</Link>
				</div>
				<div
					className="my-6 w-full flex flex-wrap items-start "
					onMouseEnter={() => handleIconHover('supervisor')}
					onMouseLeave={() => handleIconHover(null)}
				>
					<Link className="flex items-center " to={'/'}>
						<MdSupervisorAccount className="text-xl text-white" />
						<p className="text-xl text-white px-2  pt-1">Manage Users</p>
					</Link>
				</div>
				<div
					className="my-6 w-full flex flex-wrap items-start "
					onMouseEnter={() => handleIconHover('setting')}
					onMouseLeave={() => handleIconHover(null)}
				>
					<Link className="flex items-center " to={'/login'}>
						<AiOutlineSetting className="text-xl text-white" />
						<p className="text-xl text-white px-2  pt-1">Settings</p>
					</Link>
				</div>
			</div>
		</div>
	)
}
