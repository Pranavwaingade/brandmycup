import React from 'react'
import '../Style/CupSpecifications.css'

const CupSpecifications = () => {
  return (
    <div style={{display:'flex',flexDirection:'column' , gap:'px', paddingBottom:'15px',borderBottom:'2px solid #A5B29A'}}>
      <div class="custom-select-wrapper">
        <label for="modern-select" class="select-label">Choose an Cup Size</label>
        <div class="select-container">
          <select id="modern-select" name="options">
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="1"> 150ml </option>
            <option value="2"> 250ml </option>
            <option value="3"> 350ml </option>
            <option value="4"> 500ml </option>
          </select>
          <div class="select-arrow"></div>
        </div>
      </div>
      <div class="custom-select-wrapper">
        <label for="modern-select" class="select-label">Choose an Cup shape</label>
        <div class="select-container">
          <select id="modern-select" name="options">
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="1"> Cylindrical</option>
            <option value="2">  Flared Rim </option>
            <option value="3"> Wide Bowl</option>
            <option value="4"> Thick Tapered </option>

          </select>
          <div class="select-arrow"></div>
        </div>
      </div>
      <div class="custom-select-wrapper">
        <label for="modern-select" class="select-label">Choose an Paper Quality</label>
        <div class="select-container">
          <select id="modern-select" name="options">
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="1"> Standard</option>
            <option value="2">  Premium </option>
            <option value="3">  Eco Friendly</option>

          </select>
          <div class="select-arrow"></div>
        </div>
      </div>
      <div class="custom-select-wrapper">
        <label for="modern-select" class="select-label">Choose Quantity</label>
        <div class="select-container">
          <select id="modern-select" name="options">
            <option value="" disabled selected hidden>Select on the list...</option>
            <option value="1"> Pack of 55</option>
            <option value="2"> Pack of 75</option>
            <option value="3"> Pack of 95</option>

          </select>
          <div class="select-arrow"></div>
        </div>
      </div>

    </div>
  )
}

export default CupSpecifications