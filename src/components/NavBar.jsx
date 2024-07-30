import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-around items-center py-3 shadow-md shadow-gray-500'>
        <h1 className='uppercase text-3xl'>React Landing Page</h1>
        <nav>
            <ul className='uppercase flex gap-9'>
                <li>Features</li>
                <li>About</li>
                <li>Services</li>
                <li>Gallery</li>
                <li>Testimonials</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar