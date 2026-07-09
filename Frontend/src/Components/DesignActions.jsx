import React from 'react'
import '../Style/DesignActions.css'

const DesignActions = () => {
  return (
    <div style={{display:'flex',padding:'15px'}}>
      <div className="button">
            <div><a href="">Preview Design</a></div>
            <div><a href="">Add To Cart</a></div>
            <div><a href="">Save Design</a></div>
          </div>
    </div>
  )
}

export default DesignActions