import React from 'react'
import '../Style/CupSpecifications.css'

const CupSpecifications = ({setCupSize,cupSize ,cupShape,quantity,paperQuality,setCupShape ,SetPaperQuality,setQuantity}) => {
  return (
    <div style={{display:'flex',flexDirection:'column' , gap:'px', paddingBottom:'15px',borderBottom:'2px solid #A5B29A'}}>
      <div className="custom-select-wrapper">
        <label htmlFor="modern-select" className="select-label">Choose an Cup Size</label>
        <div className="select-container">
          <select id="modern-select" name="options" value={cupSize} onChange={(e)=>setCupSize(e.target.value)} >
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="150ml"> 150ml </option>
            <option value="250ml"> 250ml </option>
            <option value="350ml"> 350ml </option>
            <option value="500ml"> 500ml </option>
          </select>
          <div className="select-arrow"></div>
        </div>
      </div>
      <div className="custom-select-wrapper">
        <label htmlFor="modern-select" className="select-label">Choose an Cup shape</label>
        <div className="select-container">
          <select id="modern-select" name="options" value={cupShape} onChange={(e)=>{setCupShape(e.target.value)}}>
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="Cylindrical"> Cylindrical</option>
            <option value="FlaredRim">  Flared Rim </option>
            <option value="widebowl"> Wide Bowl</option>
            <option value="thicktapered"> Thick Tapered </option>

          </select>
          <div className="select-arrow"></div>
        </div>
      </div>
      <div className="custom-select-wrapper">
        <label htmlFor="modern-select" className="select-label">Choose an Paper Quality</label>
        <div className="select-container">
          <select id="modern-select" name="options" value={paperQuality} onChange={(e)=>{SetPaperQuality(e.target.value)}}>
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="Standard"> Standard</option>
            <option value="Premium">  Premium </option>
            <option value="EcoFriendly">  Eco Friendly</option>

          </select>
          <div className="select-arrow"></div>
        </div>
      </div>
      <div className="custom-select-wrapper">
        <label htmlFor="modern-select" className="select-label">Choose Quantity</label>
        <div className="select-container">
          <select id="modern-select" name="options" value={quantity} onChange={(e)=>{setQuantity(e.target.value)}}>
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="100">100</option>
            <option value="75"> 75</option>
            <option value="35"> 50</option>
            <option value="30"> 30</option>

          </select>
          <div className="select-arrow"></div>
        </div>
      </div>

    </div>
  )
}

export default CupSpecifications