import React from 'react'
import './Navbar.css'
import SearchIcon from './icons/search.svg'
import PersonIcon from './icons/person.svg'
import CartIcon from './icons/cart.svg'
import DropDown from './icons/dropdown.svg'


const Navbar = () => {
  return (          
    <>
        <div className='navbar-container' >
            <div className='brand-name'>SmartNexa</div>
            <div>
                <ul className='links'>
                    <li className='dropdown-container'>
                      <div>Products</div>
                      <div><img src={DropDown} alt="dropdown" width={21} height={21}/></div>
                      </li> 
                    <li>Deals</li>
                    <li>Guides</li>
                    <li className='dropdown-container'>
                      <div>Support</div>
                      <div><img src={DropDown} alt="dropdown" width={21} height={21}/></div>
                    </li>            
                </ul>
            </div>
            <div className='icon-container'>
                <a href="">
                  <img src={SearchIcon} alt="Search Icon" width={21} height={21} />
                  </a>
                <a href="">
                  <img src={PersonIcon} alt="Person Icon" width={21} height={21} />
                </a>
                <a href="" className='cart-container'>
                    <img src={CartIcon} alt="Cart Icon" width={21} height={21}/>
                </a>
            </div>
        </div>
    </>
  )
}

export default Navbar