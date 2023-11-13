import { Typography } from '@mui/material';
import { useState } from 'react';
import { MdDashboard ,MdAccountBalanceWallet} from 'react-icons/md'
import { FaDollarSign } from 'react-icons/fa'
import { BiSolidReport } from 'react-icons/bi'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdContacts} from 'react-icons/md'
import logoImage from '../Assets/Logo/Assiduus_Global_Logo.jpg';
import './index.css'




export const Sidebar = () => {

    const [activeHeader, setActiveHeader] = useState('Dashboard')

    const sidebarContent = [
        {
            icon: <MdDashboard />,
            label: 'Dashboard'
        },
        {
            icon: <MdAccountBalanceWallet /> ,
            label: 'Accounts'
        }, {
            icon: <FaDollarSign />,
            label: 'Payroll'
        }, {
            icon: <BiSolidReport /> ,
            label: 'Reports'
        }, {
            icon: <BsFillPersonFill />,
            label: 'Advisor'
        }, {
            icon: <MdContacts />,
            label: 'contacts'
        }
    ]

    const handleChangeLabel = (label) => {
        setActiveHeader(label)
    }

    return (
        <div className='sidebar-container'>
            <img src={logoImage} alt="logo" style={{ width: '250px', height: '100px', marginBottom: '2rem', marginTop: '1rem' }} />
            <div className='sidebar-second-container'>
                {sidebarContent.map((content) => {
                    return (
                        <div onClick={() => handleChangeLabel(content.label)} className={`content-container ${activeHeader === content.label ? 'active' : ''}`} key={content.label}>
                            <div style={{ marginLeft: '3rem',marginRight: '1rem' ,fontSize:'20px'}}>{content.icon}</div>
                            <Typography >{content.label}</Typography>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

