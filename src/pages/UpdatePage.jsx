import { useLocation } from 'react-router-dom'
import Header from '../components/Header/Header'
import Rightblock from '../components/Righticons/Rightblock'
import Sidbar from '../components/sidbar/sidbar'
import UpdateUser from './Updateuser'

const UpdatePage = (props) => {
	const location = useLocation()
	console.log('location', location)
	// const user = location.state.user
	// console.log(' userrrrr', user.is_admin)
	// console.log(user)
	return (
		<div className="home flex">
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
							<UpdateUser />
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

export default UpdatePage
