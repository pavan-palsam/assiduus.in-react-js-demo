import React from "react";
import { GoSearch } from 'react-icons/go'
import { IoMdNotifications } from 'react-icons/io'
import { AiFillCaretDown } from 'react-icons/ai'
import './index.css'
import { Sidebar } from "../Sidebar/index.tsx";
import { useRandomData } from "../../context.ts";

export const Header = () => {
    const { buttonClicked, setButtonClicked } = useRandomData()
    const triggerRandomData = () => {
        setButtonClicked(!buttonClicked)
    }
    return (
        <>
            <div className="first-container" >
                {(
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'initial' }}>
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '15vw',
                                height: '100vh',
                                margin: '10px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                            }}
                        >
                            <Sidebar />
                        </div>

                    </div>
                )}
                <div className="second-container">
                    <div className="search-container">
                        <GoSearch />
                        <input type='text' style={{
                            backgroundColor: '#F0F8FF', border: '0px', outline: 'none',
                        }} />
                    </div>
                    <div style={{ fontSize: '30px', marginRight: "30px" }}>
                        <IoMdNotifications />
                    </div>
                    <div style={{ fontSize: '30px' }}>
                        <img src='https://randomuser.me/api/portraits/thumb/men/75.jpg' alt='test' style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            marginRight: "20px"
                        }} />
                    </div>
                    <div>
                        <AiFillCaretDown style={{cursor:'pointer'}} onClick={triggerRandomData} />
                    </div>

                </div>
            </div>

        </>
    )
}
