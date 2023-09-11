
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const UpdateUser = (props) => {

   const [currentUser, setCurrentUser] = useState('')
   const [status, setStatus] = useState('')
   useEffect(() => {
      const user = localStorage.getItem('user')

      console.log('========>', JSON.parse(user))

      console.log('first', user)

      if (user) setCurrentUser(JSON.parse(user))
   }, [status])


   const endPoint = process.env.REACT_APP_BASE_URL
   const [profilePicture, setProfilePicture] = useState(null)
   const navigate = useNavigate()
   // const location = useLocation()
   // console.log('location', location)
   // const user = location.state.user
   console.log(' userrrrr', currentUser.is_admin)
   const [name, setName] = useState(currentUser.name)
   const [email, setEmail] = useState(currentUser.email)
   const [phone_number, setPhone_number] = useState(currentUser.phone_number)
   const user = [name, email, phone_number]
   const handleNameChange = (e) => {

      setName(e.target.value)
   }

   const handleEmailChange = (e) => {
      setEmail(e.target.value)
   }
   const handlePhonenoChange = (e) => {
      setPhone_number(e.target.value)
   }

   const handleUpdate = async () => {
      if (!name.match(/^[a-zA-Z]*$/)) {
         setStatus('Name Should be Alphabet') && console.log(status)
         return
      } else if (
         !email.match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
         )
      ) {
         setStatus('invalid email')
         return
      } else if (
         !phone_number.match(
            /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
         )
      ) {
         setStatus('invalid phone')
         return
      }

      try {
         const updatedUser = {
            ...user,
            name: name,
            email: email,
            phone_number: phone_number,
         }

         let requestData = JSON.stringify(updatedUser)

         let config = {
            method: 'PUT',
            url: `http://${endPoint}4:8000/core/user/${currentUser?.id}/`,

            headers: {
               'Content-Type': 'application/json',
            },
            data: requestData,
         }
         console.log("url", config.url)
         axios
            .request(config)
            .then((response) => {
               console.log(JSON.stringify(response.data))
               setStatus('Updated successfully')
               navigate('/home')
            })
            .catch((error) => {
               console.log(error)
            })


      } catch (error) {
         console.error('Error updating user:', error)
      }
   }
   const handleProfilePictureClick = () => {
      const input = document.getElementById('profile-picture')
      if (input) {
         input.click()
      }
   }

   const handleProfilePictureChange = (selectedFile) => {
      if (selectedFile) {
         const imageUrl = URL.createObjectURL(selectedFile)
         setProfilePicture(imageUrl)
      }
   }

   return (
      <div className="flex flex-wrap justify-center bg-gray-200 w-full h-full items-center">
         <div className="mx-auto bg-white w-6/12 h-3/4 py-4 px-10 rounded-xl flex flex-col ">
            <div className="mx-auto items-center w-full justify-center flex flex-col">

               <div
                  className="p-4 text-center "
                  onClick={handleProfilePictureClick}
               >
                  <input
                     type="file"
                     id="profile-picture"
                     accept="image/*"
                     onChange={(e) => handleProfilePictureChange(e.target.files[0])}
                     style={{ display: 'none' }}
                  />
                  {profilePicture ? (
                     <img
                        src={profilePicture}
                        alt="Profile"
                        className=" rounded-full h-20 w-20 cursor-pointer mx-4 "
                     />
                  ) : (
                     <div className="fas fa-user-circle rounded-full h-24 w-24 text-8x1 cursor-pointer mx-2 "></div>
                  )}
                  <h2 className="text-xl font-semibold ">Update User</h2>
               </div>
            </div>

            <div className="py-2">
               <div className="w-8/12 flex text-lg font-medium mx-auto py-2">
                  <input
                     type="text"
                     className="p-2 h-full"
                     value="umair"
                     onChange={handleNameChange}
                  />
               </div>
               <div className="w-8/12 flex text-lg font-medium mx-auto py-2 ">
                  <input
                     type="email"
                     className="p-2 h-full"
                     value={currentUser.email}
                     onChange={handleEmailChange}
                  />
               </div>
               <div className="w-8/12 flex text-lg font-medium mx-auto py-2">
                  <input
                     type="phoneno"
                     className="p-2 h-full"
                     value={currentUser.phone_number}
                     onChange={handlePhonenoChange}
                  />
               </div>
               <div className="w-full flex">
                  <button className="bg-blue-600 scale-100 active:scale-90 focus:scale-90 focus:bg-blue-500 text-white text-xl font-medium mx-auto" onClick={handleUpdate}>Update User</button>

               </div>
               <div>
                  <p className=" text-center status">{status}</p>
               </div>

            </div>
         </div>
      </div>

   )
}

export default UpdateUser
