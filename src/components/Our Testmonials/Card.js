import React from 'react'
import button from "./button.png"
import './Card.css'

function card() {
  return (
    <div className='card-container'>
        <div className='bg-color'>
    <div className='card-test'>
    <div className='card'>
        <div className='card-box'>
        <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nisi repellendus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nisi repellendus, tempora officiis cumque illo magnam architecto. Dicta ratione dolor minus, totam, dolorem quam asperiores magni voluptatum, eveniet ipsa provident?</p>
        </div>
        <button className='card-button'>Read More
        </button>
    </div>
    <div className='card'>
        <div className='card-box'>
        <h1>Our Value</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nisi repellendus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nisi repellendus, tempora officiis cumque illo magnam architecto. Dicta ratione dolor minus, totam, dolorem quam asperiores magni voluptatum, eveniet ipsa provident?</p>
        </div>
        <button className='card-button1'>Read More</button>
    </div>
    <div className='card'>
        <div className='card-box'>
        <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nisi repellendus, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero nisi repellendus, tempora officiis cumque illo magnam architecto. Dicta ratione dolor minus, totam, dolorem quam asperiores magni voluptatum, eveniet ipsa provident?</p>
        </div>
        <button className='card-button'>Read More</button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default card