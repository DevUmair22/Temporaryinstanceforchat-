import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Rightblock from '../components/Righticons/Rightblock'
import Sidbar from '../components/sidbar/sidbar'
import AllUser from './AllUser'

export default function Home() {
	const location = useLocation()
	// const admin = location.state.admin
	// console.log('admin', admin)
	return (
		<div className="home border flex">
			<div className=" flex flex-wrap bg-white rounded-xl h-full w-full">
				<div className=" w-2/12">
					<Sidbar />
				</div>
				<div className="w-10/12 h-full flex-col flex flex-wrap rounded-r-lg">
					<div className="h-1/6">
						<Header />
					</div>
					<div className="flex h-5/6 flex-wrap">
						<div className="w-10/12 h-full">
							<AllUser />
						</div>
						<div className="w-2/12 flex flex-wrap h-full">
							<Rightblock />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
