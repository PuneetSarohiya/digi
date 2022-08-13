import React from 'react'
import "./Content.css"
import logo from "../../components/Footer/image.png";


function Content() {
  return (
    <div className='content'>
        <div className='content-image'>
            <div className='content-logo'>
                <img src={logo} alt="img" className="img" />
               <div className='content-text'>
                <h1>we at Digivertex always strive to provide our clients</h1>
                <span>with a board range of services to choose from to fake your business a </span>
                    <h1>notch higher.Some of our prominent digital Marketing</h1>
                    <h2>service include the following:</h2>
                
               </div>
               <button className='content-button'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Content