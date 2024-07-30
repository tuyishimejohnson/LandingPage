import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faBullhorn, faPeopleGroup, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'


const Features = () => {

  let iconArray = [faComments, faBullhorn, faPeopleGroup, faWandMagicSparkles]


    return (

    
        <div>
            <h1 className='uppercase font-bold text-5xl text-center'>Features</h1>

            <div className='grid grid-cols-4 px-36 gap-4'>
                {iconArray.map((item, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <div className='bg-blue-500 rounded-full p-6 text-white'>
                      < FontAwesomeIcon icon={item} className='size-16' />
                    </div>
                    <div className='text-center'>
                      <h2 className='text-2xl font-semibold pt-10 pb-5'>Lorem ipsum</h2>
                      <p>Lorem ipsum dolor sit amet placerat facilisis felis 
                        mi in tempus eleifend pellentesque natoque etiam.</p>
                    </div>

                  </div>
                ))}
            </div>
        </div>
        
            

  )
  }
  


export default Features 