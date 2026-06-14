import React from 'react'
import '../Style/FeaturedProducts.css'
import ml150 from '../img/150ml.png'
import ml250 from '../img/250ml.png'
import ml350 from '../img/350ml.png'



const FeaturedProducts = () => {
  return (
    <>
      <div className="featured">
        <div className='content'>
          <h1>Explore Our Custom Paper Cup Collection</h1><br />
          <p>Choose from a variety of premium-quality paper cups designed to showcase your brand and create a memorable customer experience.</p>
          <div class="slider-container">
            <div class="card card-1">
              <h1>Small Paper Cup (150ml)</h1> <br />
              <div className='features'>
                <p style={{color:'black'}}><b>Best For:</b></p>
                <ul>
                  <li>Tea</li>
                  <li>Espresso</li>
                  <li>Sampling</li>
                </ul>
                <br />
                <p style={{color:'black'}}><b>Features:</b></p>
                <ul><li>Compact design</li>
                  <li>Leak-resistant coating</li>
                  <li>Custom logo printing</li>
                  <li>Eco-friendly material</li>
                </ul>
              </div>
              <img src={ml150} alt="" />
            </div>
            <div class="card card-2">
              <h1>Medium Paper Cup (250ml)</h1> <br />
              <div className='features'>
                <p style={{color:'black'}}><b>Best For:</b></p>
                <ul>
                  <li>Coffee</li>
                  <li>Juice</li>
                  <li>Soft Drinks</li>
                </ul>
                <br />
                <p style={{color:'black'}}><b>Features:</b></p>
                <ul><li>Most popular size</li>
                  <li>Premium print quality</li>
                  <li>Durable paper material</li>
                  <li>Multiple color options</li>
                </ul>
              </div>
              <img src={ml250} alt="" style={{width:'50%'}} />
            </div>
            <div class="card card-3">
              <h1>Large Paper Cup (350ml)</h1> <br />
              <div className='features'>
                <p style={{color:'black'}}><b>Best For:</b></p>
                <ul>
                  <li>Cold Coffee</li>
                  <li>Milkshakes</li>
                  <li>Smoothies</li>
                </ul>
                <br />
                <p style={{color:'black'}}><b>Features:</b></p>
                <ul><li>Extra capacity</li>
                  <li>Strong paper construction</li>
                  <li>Full-wrap branding support</li>
                  <li>High-quality finish</li>
                </ul>
              </div>
              <img src={ml350} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default FeaturedProducts