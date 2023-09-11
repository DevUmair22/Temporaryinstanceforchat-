import { Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import Rightblock from '../components/Righticons/Rightblock'
import Sidbar from '../components/sidbar/sidbar'
function Dashboard() {
	return (
		<div>
			<div className="home border flex">
				{/* <div style={{ width: '1300px' }} className='  bg-gray-200'> */}
				{/* <div>
                    <Header />
                </div> */}
				{/* <div className='flex'> */}

				<div className=" flex flex-wrap bg-white rounded-xl h-full w-full">
					<div className=" w-2/12">
						<Sidbar />
					</div>
					<div className="w-10/12 h-full flex-col flex flex-wrap rounded-r-lg">
						<div className="h-1/6">
							<Header />
						</div>
						<div className="flex h-5/6 flex-wrap">
							<div className="w-10/12 h-full flex justify-center items-center text-5xl font-bold text-gray-400 ">
								<p>DashBoard</p>
							</div>
							<div className="w-2/12 flex flex-wrap h-full">
								<Rightblock />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Your dashboard content */}
			<Link to="/logout">Logout</Link>
		</div>
	)
}

export default Dashboard
