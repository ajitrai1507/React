import React from 'react'

function Navbar() {
  return (
    <>
        <div className='navbar flex p-5 justify-between text-white items-center'>
            <div className='logo text-xl cursor-pointer text-yellow-200'>techaccess4global</div>
            <div className='navinfo flex gap-5 list-none cursor-pointer p-3 text-xl'>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact Us</li>
            </div>
        </div>
    </>
  )
}

export default Navbar