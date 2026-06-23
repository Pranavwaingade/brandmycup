import React from 'react'
import '../Style/HowItWorks.css'
import bg from '../img/bg.webp'

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="heading">
          <h1 style={{ fontSize: 'larger', backgroundColor: '#8d4a2300' }}>How Craft Cup Works</h1>

        </div>
        <div className='Steps'>
          <div className="stepsin">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-dice-1-fill" viewBox="0 0 16 16">
              <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg><br />
            <div>
              <h1>Choose Your Cup</h1>
              <br />
              <p style={{ fontSize: '25px' }}>Select the size, shape, and paper quality that best fits your business needs.</p>
            </div>
          </div>


          <div className="stepsin">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-dice-2-fill" viewBox="0 0 16 16">
              <path d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg><br />
            <div>
              <h1>Upload Your Design</h1>
              <br />
              <p style={{ fontSize: '25px' }}>Upload your logo, brand name, or custom artwork to personalize your cups.</p>
            </div>
          </div>


          <div className="stepsin">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-dice-3-fill" viewBox="0 0 16 16">
              <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg><br />
            <div>
              <h1>Preview & Customize</h1>
              <br />
              <p style={{ fontSize: '25px' }}>Review your design  with a live preview and make adjustments before ordering.</p>
            </div>
          </div>
          <div className="stepsin" style={{ gap: '5px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-dice-4-fill" viewBox="0 0 16 16">
              <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg><br />
            <div>
              <h1>Place Your Order</h1>
              <br />
              <p style={{ fontSize: '25px' }}>Complete your order securely and get your custom-branded cups delivered to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks