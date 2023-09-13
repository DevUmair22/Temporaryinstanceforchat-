import React from 'react'
import Header from '../../components/Header/Header'
import Sidbar from '../../components/sidbar/sidbar'
const AgentView = () => {
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
						<div className="w-10/12 h-full"></div>
						<div className="w-2/12 flex flex-col flex-wrap h-full">
							<div className="h-1/4 w-full bg-white">
								<h1 className="text-lg  font-semibold p-1">Customers Bio</h1>
								<div className="flex justify-center p-4 ">
									{' '}
									<div className="w-2/6 h-full">
										<img src="" alt="customer-icon" />
									</div>
									<p className="text-md flex-col flex justify-left">name</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AgentView
