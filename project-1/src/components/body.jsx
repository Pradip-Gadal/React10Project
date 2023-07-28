import React from 'react'
import './body.css'

const Body = () => {
  return (
    <main className='body-div'>
      <div className='nike-discription content'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='button-section'>
            <button className='shopNow'>Shop Now</button>
            <button className='category'>Category</button>
        </div>
        <div className='reference-section'>
            <pre className='reference-text-description'>
            Also Available On
            </pre>
            <div className='reference-logo'>
                <img src='image/flipkart.png' alt='flipkart'/>
                <img src='image/amazon.png' alt='amazon' />
            </div>
        </div>
      </div>
      <div className='shoe-image content'>
        <img src='image/shoe_image (1).png' alt='shoe-image' />
      </div>
    </main>
  )
}

export default Body;
