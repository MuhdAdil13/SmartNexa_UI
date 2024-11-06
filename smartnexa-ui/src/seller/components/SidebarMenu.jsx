import React from 'react'
import "./SidebarMenu.css"
import { Link } from "react-router-dom";
import DashIcon from "./icons/dashboard.svg"
import ProductIcon from "./icons/product.svg"
import OrderIcon from "./icons/order.svg"
import AnalyticsIcon from "./icons/analytics.svg"
import SettingsIcon from "./icons/settings.svg"
import HelpIcon from "./icons/help.svg"
import LogoutIcon from "./icons/logout.svg"

const SidebarMenu = () => {
    return(
        <>
                <nav className="sidebar-menu">
                    <div className="brand-name">SmartNexa</div>
                    <div className="menu-section">
                        <div className="menu-links">
                            <h5 className='menu-'>MENU</h5>
                            <div className="icon-box">
                                <img src={DashIcon} alt="Dashboard Icon"  width={18} height={18}/>
                                <Link to="" className="">Dashboard</Link>
                            </div>
                            <div className="icon-box">
                                <img src={ProductIcon} alt="Product Icon" width={18} height={18}/>
                                <Link to="add-products" className="">Products</Link>
                            </div>
                            <div className="icon-box">
                                <img src={OrderIcon} alt="Product Icon" width={18} height={18}/>
                                <Link to="" className="">Orders</Link>
                            </div>
                            <div className="icon-box">
                                <img src={AnalyticsIcon} alt="Analytics Icon" width={21} height={21}/>
                                <Link to="" className="">Analytics</Link>
                            </div>
                        </div>
                        <div className="account-links">
                            <h5>ACCOUNT</h5>
                            <div className="icon-box">
                                <img src={SettingsIcon} alt="Settings Icon" width={15} height={15}/>
                                <Link to="" className="">Settings</Link>
                            </div>
                            <div className="icon-box">
                                <img src={HelpIcon} alt="Help Icon" width={18} height={18}/>
                                <Link to="" className="">Help</Link>
                            </div>
                        </div>
                    </div>
                    <div className="profile-card">
                        <div className="img-box"><img src="https://picsum.photos/100" alt="profile image" /></div>
                        <div className="details">
                            <div className="name">John Doe</div>
                            <div className="email">john@gmail.com</div>
                        </div>
                        <div className='icon'>
                            <img src={LogoutIcon}  alt="Logout Icon" width={22} height={22}/>
                        </div>
                    </div>
                </nav>
        </>
    )
};

export default SidebarMenu