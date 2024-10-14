import React from 'react'

const Navbar = () => {
    const navbarContainer = {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems:'center',    
        height:'4rem',
        padding:'0 2rem',      
        backgroundColor:'dodgerblue',
        color:'white'
    }

    const brandName = {

    }

    const links = {
        display : 'flex',
        listStyleType : 'none',
        gap:'2rem'
    }      

  return (          
    <>
        <div style={navbarContainer} >
            <div style={brandName}>SmartNexa</div>
            <div>
                <ul style={links}>
                    <li>Products</li>
                    <li>Deals</li>
                    <li>Guides</li>
                    <li>Support</li>            
                    <li>Cart</li>
                    <li>Login/Signup</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar