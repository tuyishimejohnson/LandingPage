import React from 'react'
import image1 from "../images/about.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faBullhorn, faPeopleGroup, faCheck } from '@fortawesome/free-solid-svg-icons'


const AboutUs = () => {
  return (
    <div>
        <div className='grid grid-cols-2 gap-10 mx-36'>
          <div className=''>
            <img src={image1} alt="" className='w-full h-80 object-cover'/>
          </div>

          <div className='flex flex-col justify-between'>
            <h1 className='uppercase text-4xl font-bold'>About Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <div>
              <h1 className='text-3xl pb-3'>Why Choose Us?</h1>
              <div className='flex w-3/4 justify-between'>
                <div className='flex flex-col'>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Lorem ipsum dolor</span>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Tempor incididunt</span>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Lorem ipsum dolor</span>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Incididunt ut labore</span>
                </div>

                <div className='flex flex-col'>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Aliquip ex ea commodo</span>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Exercitation ullamco</span>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Lorem ipsum dolor</span>
                  <span>< FontAwesomeIcon icon={faCheck} className='text-blue-500 text-xs font-semibold'/>Lorem ipsum dolor</span>
                </div>
              </div>
            </div>
          </div>
            
        </div>
    </div>
  )
}

export default AboutUs