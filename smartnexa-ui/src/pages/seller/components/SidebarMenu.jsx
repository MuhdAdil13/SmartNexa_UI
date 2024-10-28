import React from 'react'
import "./SidebarMenu.css"
import DashIcon from "./icons/dashboard.svg"

const SidebarMenu = () => {
    return(
        <>
            <div className="container">
                <nav className="sidebar">
                    <div className="brand-name">SmartNexa</div>
                    <div className="menu-section">
                        <div className="menu-links">
                            <h5 className='menu-'>MENU</h5>
                            <img src={DashIcon} alt="Dashboard Icon"  width={21} height={21}/>
                            <a href="" className="">Dashboard</a>
                            <a href="" className="">Manage Products</a>
                            <a href="" className="">Manage Orders</a>
                            <a href="" className=''>Manage Payments</a>
                            <a href="" className=''>Manage Inventory</a>
                            <a href="" className="">Analytics</a>
                        </div>
                        <div className="account-links">
                            <h5>ACCOUNT</h5>
                            <a href="" className="">Profile</a>
                            <a href="" className="">Settings</a>
                            <a href="" className="">Help Center</a>
                            <a href="" className=''>Logout</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default SidebarMenu