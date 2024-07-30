import React from 'react'
import { FontAwesomeIcon, faLanguage, faCartShopping, faCloudArrowDown, faPlane, faChartPie, faWordPress } from '@fortawesome/react-fontawesome'



const dataInfo = [
  {title: "Lorem ipsum dolor", icon: faWordPress}, 
  {title: "Consectetur adipiscing", icon: faCartShopping},
  {title: "Lorem ipsum dolor", icon: faCloudArrowDown}, 
  {title: "Consectetur adipiscing", icon: faLanguage}, 
  {title: "Lorem ipsum dolor", icon: faPlane}, 
  {title: "Consectetur adipiscing", icon: faChartPie}
]

console.log(dataInfo)


const Services = () => {
  return (
    <div>
        <h1 className='uppercase'>Our Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        {dataInfo.map((item, index) => (
          <div key={index}>
              <div>
                < FontAwesomeIcon icon={item.icon}/>
                <h1>{item.title}</h1>
              </div>
          </div>
        ))}
    </div>
  )
}

export default Services