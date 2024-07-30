import React from 'react'
import { FontAwesomeIcon, faLanguage, faCartShopping, faCloudArrowDown, faPlane, faChartPie, faWordPress } from '@fortawesome/react-fontawesome'

const dataInfo = [{image: faWordPress}, {image: faCartShopping},{image: faCloudArrowDown}, {image: faLanguage}, {image: faPlane}, {image: faChartPie}]


const Services = () => {
  return (
    <div>
        <h1 className='uppercase'>Our Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        {dataInfo.map((item, index) => (
          <div key={index}>
              <div>
                < FontAwesomeIcon icon={item}/>
                <h1></h1>
              </div>
          </div>
        ))}
    </div>
  )
}

export default Services