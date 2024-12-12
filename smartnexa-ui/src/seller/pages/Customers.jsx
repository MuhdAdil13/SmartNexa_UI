import React from 'react'
import "./css/Customers.css"
import SearchIcon from "./icons/SearchIcon.svg";
import SortIcon from "./icons/SortIcon.svg";
import FilterIcon from "./icons/FilterIcon.svg";
import EditPencilIcon from "./icons/EditPencilIcon.svg";
import DeleteIcon from "./icons/DeleteIcon.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Customers = () => {
  return (
    <>
        <div className="container-fluid p-3">
            <h4>Customers</h4>
            <div className="customer-btn-box">
                <button className="add-customer-btn">+ Add Customer</button>
            </div>
            <div className="customer-list-section">
                <div className="row list-header mb-4">
                    <div className="col-8">
                        <div className="customer-search-box">
                            <i><img src={SearchIcon} alt="Search Icon" /></i>
                            <input type="text" className='search-input' placeholder='Search by Customer...' name="" id="" />
                        </div>
                    </div>
                    <div className="col-4 sort-filter-card">
                        <div className="sort-card">
                            <span>Sort <i><img src={SortIcon} alt="Sort Icon" /></i></span>
                        </div>
                        <div className="filter-card">
                            <span>Filter <i><img src={FilterIcon} alt="Filter Icon" /></i></span>
                        </div>
                    </div>
                </div>
                <div className="list-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead className="table-light text-muted">
                                <tr>
                                    <th scope=''>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                                        </div>
                                    </th>
                                    <th scope=''>Customer</th>
                                    <th scope=''>Email</th>
                                    <th scope=''>Phone</th>
                                    <th scope=''>Location</th>
                                    <th scope=''>Joined</th>
                                    <th scope=''>Status</th>
                                    <th scope=''>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault"></label>
                                        </div>
                                    </td>
                                    <td className='customer-name-hover'>John Doe</td>
                                    <td>johnoffcl@gmail.com</td>
                                    <td>+91 9875634564</td>
                                    <td>USA</td>
                                    <td>10/11/2024</td>
                                    <td>Active</td>
                                    <td>
                                        <div  className='action-btn-card'>
                                            <div className='pencil-icon'>
                                                <img src={EditPencilIcon} alt="Edit Pencil Icon" />
                                            </div>
                                            <div className='delete-icon'>
                                                <img src={DeleteIcon} alt="Delete Icon" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Customers