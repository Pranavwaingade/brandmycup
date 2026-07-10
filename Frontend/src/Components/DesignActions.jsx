import React from 'react'
import '../Style/DesignActions.css'

const DesignActions = () => {
  return (
    <div style={{display:'flex',padding:'15px'}}>
      <div className="button">
            <div><a className='abutton' href="">Preview Design</a></div>
            <div><a className='abutton' href="/Cart">Add To Cart</a></div>
            <div><a className='abutton' href="">Save Design</a></div>
          </div>
    </div>
  )
}

export default DesignActions