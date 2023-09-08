import React, { useState } from 'react';
import { MdSupervisorAccount } from 'react-icons/md';
import { BsCalendarCheck } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './sidbar.css'
export default function Sidebar() {
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [dashboard,setDashboard]=useState()

    const handleIconHover = (icon) => {
        setHoveredIcon(icon);
    };

    return (

        <div style={{ height: '700px', background: '#2E2E48' }} className='w-20 p-2 flex flex-col justify-center rounded-md  items-center'>
            <div className={`my-6 ${hoveredIcon === 'home' ? 'icon-hover' : ''}`} onMouseEnter={() => setDashboard('home')} onMouseLeave={() => handleIconHover(null)}>
                <Link to ={'/Dashboard'}>
                <FontAwesomeIcon icon={faHome} className={`text-white`} 
            
                />
                </Link>
            </div>
            <div className={`my-6 ${hoveredIcon === 'user' ? 'icon-hover' : ''}`} onMouseEnter={() => handleIconHover('user')} onMouseLeave={() => handleIconHover(null)}>
                <Link to ={'/login'}>
                <FontAwesomeIcon icon={faUser} className={`text-white`} />
                </Link>
            </div>
            <div className={`my-6 ${hoveredIcon === 'cog' ? 'icon-hover' : ''}`} onMouseEnter={() => handleIconHover('cog')} onMouseLeave={() => handleIconHover(null)}>
                <FontAwesomeIcon icon={faCog} className={`text-white`} />
            </div>
            <div className={`my-6 ${hoveredIcon === 'calendar' ? 'icon-hover' : ''}`} onMouseEnter={() => handleIconHover('calendar')} onMouseLeave={() => handleIconHover(null)}>
                <BsCalendarCheck className={`text-white`} />
            </div>
            <div className={`my-6 ${hoveredIcon === 'supervisor' ? 'icon-hover' : ''}`} onMouseEnter={() => handleIconHover('supervisor')} onMouseLeave={() => handleIconHover(null)}>
                <MdSupervisorAccount className={`text-white`} />
            </div>
            <div className={`my-6 ${hoveredIcon === 'setting' ? 'icon-hover' : ''}`} onMouseEnter={() => handleIconHover('setting')} onMouseLeave={() => handleIconHover(null)}>
                <AiOutlineSetting className={`text-white`} />
            </div>
        </div>
    );
}
