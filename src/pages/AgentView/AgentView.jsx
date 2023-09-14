import React from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import Header from '../../components/Header/Header'
import Sidbar from '../../components/sidbar/sidbar'
const AgentView = () => {
	const queries = [
		{
			name: 'Umair Malik',
			messageCoount: 3,
			time: '0m',
		},
		{
			name: 'Noman Zafar',
			messageCoount: 1,
			time: '3m',
		},
		{
			name: 'Ijlal Shah',
			messageCoount: '',
			time: '5m',
		},
		{
			name: 'Umair Rajpoot',
			messageCoount: '',
			time: '9m',
		},
	]

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
							<div className="w-1/4 bg-gray-100 h-full">
								<div className="bg-gray-50 pb-2 ">
									<h1 className="text-center text-lg py-4 bg-sky-50 border-y text-sky-700">
										My Chats (1)
									</h1>
									<ul className="py-2 px-2">
										{queries.map((item, index) => (
											<li className="py-1" key={index}>
												<div className="flex rounded-xl items-center bg-white flex-wrap p-1 shadow-lg">
													<div className="w-1/4 px-4 py-2 flex">
														<div className="rounded-full bg-yellow-500 w-full h-full p-2">
															<BsPersonFill className="text-orange-800 w-full h-full " />
														</div>
													</div>
													<p className="w-2/4 text-lg flex">{item.name}</p>
													<div className=" flex flex-wrap h-full flex-col  px-6 w-1/4">
														<span className="h-1/2 text-center pt-1">
															{item.time}
														</span>
														<div className="bg-red-500 h-1/2 text-center text-white rounded-full ">
															{item.messageCoount}
														</div>
													</div>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>

							<div className="w-3/4"></div>
						</div>
						<div className="w-2/12 flex flex-col flex-wrap h-full">
							<div className="h-1/4  bg-gray-100 w-full  px-2 py-1">
								<div className="rounded-md px-4 py-2 border h-full shadow-xl bg-white">
									<h1 className="text-md  font-semibold p-1">Customers Bio</h1>
									<div className="flex justify-left py-2 ">
										{' '}
										<div className="w-2/6 h-full p-1">
											{/* <img src={<CgProfile />} alt="customer-icon" /> */}
											<CgProfile className="h-full w-full text-center" />
										</div>
										<div className="w-4/6 pl-2">
											<p className="text-sm flex-col flex justify-left">
												UmairMalik
											</p>

											<p className="text-sm flex-col flex justify-left">
												03121234123
											</p>

											<p className="text-sm flex-col flex justify-left">
												umair@gmail.com
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="h-1/4  bg-gray-100 w-full  px-2 py-1">
								<div className="rounded-md px-4 py-2 border h-full shadow-xl bg-white">
									<h1 className="text-md  font-semibold p-1">Query Question</h1>
								</div>
							</div>
							<div className="h-2/4  bg-gray-100 w-full  px-2 py-1">
								<div className="rounded-md px-4 py-2 border h-full shadow-xl bg-white">
									<h1 className="text-md  font-semibold p-1">
										Customer History
									</h1>
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
