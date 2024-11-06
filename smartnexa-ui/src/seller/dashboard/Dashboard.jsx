import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css"
import SidebarMenu from '../components/SidebarMenu';
import AddProducts from '../pages/AddProducts';

const Dashboard = () => {
    return (
        <>
             <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <SidebarMenu />

            {/* Main content area */}
            <div style={{ flex: 1 ,marginLeft:"250px"}}>
                <Routes>
                    {/* <Route path="dashboard" element={<DashboardHome />} /> */}
                    <Route path="add-products" element={<AddProducts />} />
                    {/* <Route path="orders" element={<Orders />} />
                    <Route path="analytics" element={<Analytics />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="help" element={<Help />} /> */}
                    {/* Add more routes here as needed */}
                </Routes>
            </div>
        </div>

        </>     
    );
};

export default Dashboard;