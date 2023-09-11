import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { BiSolidLock } from 'react-icons/bi'
import { BsTrash3Fill } from 'react-icons/bs'
import { FaEdit } from 'react-icons/fa'
import { HiOutlineLockOpen } from 'react-icons/hi'
import { IoMdKey } from 'react-icons/io'
import ReactPaginate from 'react-paginate'
import { Link, useNavigate } from 'react-router-dom'

import Widget from './widget'

const itemsPerPage = 10 // Number of items to display per page

const departmentOptions = [
	'Departments',
	'Sales',
	'finance',
	'Marketing',
	'Technical',
]

export default function AllUser() {
	const endPoint = process.env.REACT_APP_BASE_URL
	console.log('environment', endPoint)
	const [data, setData] = useState([])
	const [lockedId, setLockedId] = useState(null)
	const [currentPage, setCurrentPage] = useState(0)
	const [expandedRowIndex, setExpandedRowIndex] = useState(null)
	const [showOptions, setShowOptions] = useState(false)
	const [departement, setDepartment] = useState('')
	// const[active,setActive]=useState(data.is_active);
	const navigate = useNavigate()

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = async () => {
		try {
			const response = await axios.get(`http://${endPoint}:8000/core/user/`)
			setData(response.data.data)
			console.log('firstttttt', data)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}
	console.log('data fetched', data)
	const sortedData = data.reverse()
	const toggleOptions = (index) => {
		setExpandedRowIndex(index)
		setShowOptions(true)

		setTimeout(() => {
			setShowOptions(false)
			setExpandedRowIndex(null)
		})
	}

	const handleDelete = async (user) => {
		if (user.is_admin || !user.is_active) {
			alert('you cannot delete ')
		} else {
			try {
				let requestData = JSON.stringify({
					email: user.email,
					is_admin: user.is_admin,
				})

				let config = {
					method: 'delete',
					url: 'http://172.20.17.81:8000/core/user/',
					headers: {
						'Content-Type': 'application/json',
					},
					data: requestData,
				}

				axios
					.request(config)
					.then((response) => {
						console.log(JSON.stringify(response.data))
						if (response.status === 200) {
							const updatedData = data.filter((u) => u.email !== user.email)
							setData(updatedData)
							console.log(`Deleted user with id: ${user.email}`)
						}
					})
					.catch((error) => {
						console.log(error)
					})
			} catch (error) {
				console.error('Error deleting user:', error)
			}
		}
	}

	const handlePasswordReset = async (user) => {
		let email = user.email

		try {
			const response = await axios.post(
				'http://172.20.17.81:8000/core/password/reset/request/',

				{
					email,
				}
			)

			if (response.status === 200) {
				console.log('reset request ok')

				alert('Password reset email sent. Please check your inbox.')
			}
		} catch (error) {
			console.log(error)
		}
	}

	const handleNameChange = (value, index) => {
		const newData = [...data]
		newData[index].name = value
		setData(newData)
	}

	const handleEmailChange = (value, index) => {
		const newData = [...data]
		newData[index].email = value
		setData(newData)
	}
	const handlePhonenoChange = (value, index) => {
		const newData = [...data]
		newData[index].phone_number = value
		setData(newData)
	}
	const handleClick = () => {
		// implementation details
	}
	// const handleUpdate = async (user) => {
	//     try {
	//         let requestData = JSON.stringify(user);

	//         let config = {
	//             method: 'PUT',
	//             url: 'http://192.168.81.173:8000/core/user/',
	//             headers: {
	//                 'Content-Type': 'application/json'
	//             },
	//             data: requestData
	//         };

	//         axios.request(config)
	//             .then((response) => {
	//                 console.log(JSON.stringify(response.data));
	//                 if (response.status === 200) {
	//                     const updatedData = data.filter(u => u.email !== user.email);
	//                     setData(updatedData);
	//                     console.log(`update user with id: ${user.email}`);
	//                 }
	//             })
	//             .catch((error) => {
	//                 console.log(error);
	//             });

	//     } catch (error) {
	//         console.error('Error deleting user:', error);
	//     }
	// };
	const handleUpdate = (user) => {
		console.log('first==', user)
		if (user.is_active) navigate('/update', { state: { user } })
	}
	const onDepartmentChange = (user, value) => {
		try {
			const updatedUser = {
				...user,
				// is_admin:user.is_admin ?false:true
				role_or_permission: value,
			}

			let requestData = JSON.stringify(updatedUser)
			let config = {
				method: 'PUT',
				url: `http://172.20.17.81:8000/core/user/${user.id}/`,

				headers: {
					'Content-Type': 'application/json',
				},
				data: requestData,
			}

			axios
				.request(config)
				.then((response) => {
					console.log(JSON.stringify(response.data))
					const temp = data.map((u) => {
						return u.id === user.id ? updatedUser : u
					})
					setData(temp)
				})
				.catch((error) => {
					console.log(error)
				})
		} catch (error) {
			console.error('Error updating user department:', error)
		}
	}
	const handleLockToggle = (user) => {
		console.log('first==', user)
		try {
			//             if(user.is_active){
			//                 user.is_active ? true:false
			//             }
			// console.log("first,",user)
			//             setActive(!user)
			const updatedUser = {
				...user,
				// is_admin:user.is_admin ?false:true
				is_active: user.is_active ? false : true,
			}

			let requestData = JSON.stringify(updatedUser)

			let config = {
				method: 'PUT',
				url: `http://172.20.17.81:8000/core/user/${user.id}/`,

				headers: {
					'Content-Type': 'application/json',
				},
				data: requestData,
			}

			axios
				.request(config)
				.then((response) => {
					console.log(JSON.stringify(response.data))
					const temp = data.map((u) => {
						return u.id === user.id ? updatedUser : u
					})
					setData(temp)
				})
				.catch((error) => {
					console.log(error)
				})
			// Send update request to backend with updated user data
			// const response = await axios.put(`http://192.168.81.173:8000/core/user/${user.id}`, updatedUser);
			// console.log(response)

			// Handle response and update user in parent component's state
			// Redirect back to the main page after successful update
		} catch (error) {
			console.error('Error updating user:', error)
		}
	}

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected)
	}

	const pageCount = Math.ceil(data.length / itemsPerPage)
	const activeAccounts = useMemo(() => {
		return data.filter((account) => {
			return account.is_active
		})
	}, [data])
	const inActiveAccounts = useMemo(() => {
		return data.filter((account) => {
			return !account.is_active
		})
	}, [data])
	console.log('department state', departement)
	return (
		<div
			style={{ background: '#F4F4F5' }}
			className="h-full pt-2 flex flex-wrap"
		>
			<div className="flex justify-center px-10 w-full flex-wrap h-1/6 ">
				{/* ... Widgets ... */}
				<Widget label="Total Accounts" count={data.length} />
				<Widget label="Active Accounts" count={activeAccounts.length} />
				<Widget label="Inactive Accounts" count={inActiveAccounts.length} />
			</div>
			<div className="w-full bg-white shadow-lg h-5/6 px-4 py-1 flex flex-col flex-wrap">
				<div className="justify-between w-full flex h-1/6 items-center flex-wrap">
					<h1 className="text-xl w-3/4 font-bold mx-auto">All Users</h1>

					<div className="w-1/4 px-3">
						<Link to="/user">
							<button
								type="button"
								className="mx-auto m-0 w-full h-8 text-sm text-white bg-sky-600 px-2 font-medium py-1"
								onClick={handleClick}
							>
								+ Add User
							</button>
						</Link>
					</div>
				</div>
				<table className="text-center text-white font-medium w-full border-collapse h-4/6">
					<thead className="bg-[#3E97CF] h-10">
						<tr className=" border rounded-lg h-full ">
							<th className="border px-4">Name</th>
							<th className="border px-4">Email</th>
							<th className="border px-4">Contact no</th>

							<th className="border px-4">Department</th>
							<th className="border px-4">Actions</th>
						</tr>
					</thead>
					<tbody className="text-gray-700">
						{sortedData
							.slice(
								currentPage * itemsPerPage,
								(currentPage + 1) * itemsPerPage
							)
							.map((val, index) => (
								<React.Fragment key={index}>
									<tr className="border ">
										<td className="border pl-5 py-1">{val.name}</td>
										<td className="border pl-5 py-1">{val.email}</td>
										<td className="border pl-5 py-1">{val.phone_number}</td>

										<td className="border pl-5 py-1">
											<select
												value={val.role_or_permission}
												// onClick={() => toggleOptions(index)}
												onChange={(e) => {
													onDepartmentChange(val, e.target.value)
												}}
												onMouseLeave={() => setShowOptions(false)}
											>
												{departmentOptions.map((option, optionIndex) => (
													<option key={optionIndex} value={option}>
														{option}
													</option>
												))}
											</select>
										</td>
										<td className=" justify-center py-2 flex flex-wrap">
											{/* <Link to={`/update/${val}`} className='cursor-pointer'>
                                            <FaEdit className='cursor-pointer' />
                                        </Link> */}
											<IoMdKey
												className="mx-1 cursor-pointer hover:scale-110"
												onClick={() => handlePasswordReset(val)}
											/>
											<FaEdit
												onClick={() => handleUpdate(val)}
												className="cursor-pointer mx-1 hover:scale-110 text-blue-500"
											/>
											{val.is_active ? (
												<HiOutlineLockOpen
													onClick={() => handleLockToggle(val)}
													className="cursor-pointer mx-1 hover:scale-110 text-green-700"
												/>
											) : (
												<BiSolidLock
													onClick={() => handleLockToggle(val)}
													className="cursor-pointer mx-1 hover:scale-110 text-red-500"
												/>
											)}
											<BsTrash3Fill
												onClick={() => handleDelete(val)}
												className="cursor-pointer mx-1 hover:scale-110 text-red-500"
											/>
										</td>
									</tr>
								</React.Fragment>
							))}
					</tbody>
					{/* <tfoot>
						<tr>
							{expandedRowIndex === index && (
								<tr key={`${index}-edit`} className="border ">
									<td colSpan="2" className="border pl-5 py-1">
										<input
											type="text"
											value={val.name}
											onChange={(e) => handleNameChange(e.target.value, index)}
										/>
									</td>
									<td colSpan="2" className="border pl-5 py-1">
										<input
											type="text"
											value={val.email}
											onChange={(e) => handleEmailChange(e.target.value, index)}
										/>
									</td>
									<td colSpan="2" className="border pl-5 py-1">
										<input
											type="text"
											value={val.phone_number}
											onChange={(e) =>
												handlePhonenoChange(e.target.value, index)
											}
										/>
									</td>
									<td className="pl-8 justify-center py-2 flex">
										<button
											onClick={() => handleUpdate(val.id, index)}
											className="bg-blue-500 text-white px-4 py-1 rounded"
										>
											Update
										</button>
										<button
											onClick={() => handleDelete(val.email)}
											className="bg-red-500 text-white px-4 py-1 rounded"
										>
											Delete
										</button>
									</td>
								</tr>
							)}
						</tr>
					</tfoot> */}
				</table>

				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					pageCount={pageCount}
					onPageChange={handlePageChange}
					containerClassName={'pagination-container'}
					previousLinkClassName={'previous-link'}
					nextLinkClassName={'next-link'}
					disabledClassName={'disabled'}
					activeClassName={'active'}
					className="flex flex-wrap mx-auto justify-center pt-6 pb-2 items-center"
				/>
			</div>
		</div>
	)
}
