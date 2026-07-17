import React from 'react';
import '../Style/CupSpecifications.css';

const CupSpecifications = ({
  cupSize,
  setCupSize,
  cupShape,
  setCupShape,
  paperQuality,
  setPaperQuality,
  quantity,
  setQuantity,
}) => {
  return (
    <div className="cup-specifications">

      {/* Cup Size */}
      <div className="custom-select-wrapper">
        <label className="select-label">Choose Cup Size</label>

        <div className="select-container">
          <select
            value={cupSize}
            onChange={(e) => setCupSize(e.target.value)}
          >
            <option value="150ml">150 ml</option>
            <option value="250ml">250 ml</option>
            <option value="350ml">350 ml</option>
            <option value="500ml">500 ml</option>
          </select>

          <div className="select-arrow"></div>
        </div>
      </div>

      {/* Shape */}
      <div className="custom-select-wrapper">
        <label className="select-label">Choose Cup Shape</label>

        <div className="select-container">
          <select
            value={cupShape}
            onChange={(e) => setCupShape(e.target.value)}
          >
            <option value="Cylindrical">Cylindrical</option>
            <option value="Flared Rim">Flared Rim</option>
            <option value="Wide Bowl">Wide Bowl</option>
            <option value="Thick Tapered">Thick Tapered</option>
          </select>

          <div className="select-arrow"></div>
        </div>
      </div>

      {/* Paper Quality */}
      <div className="custom-select-wrapper">
        <label className="select-label">Paper Quality</label>

        <div className="select-container">
          <select
            value={paperQuality}
            onChange={(e) => setPaperQuality(e.target.value)}
          >
            <option value="Standard">Standard</option>
            <option value="Premium">Premium</option>
            <option value="Eco Friendly">Eco Friendly</option>
          </select>

          <div className="select-arrow"></div>
        </div>
      </div>

      {/* Quantity */}
      <div className="custom-select-wrapper">
        <label className="select-label">Quantity</label>

        <div className="select-container">
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="75">75</option>
            <option value="100">100</option>
            <option value="250">250</option>
            <option value="500">500</option>
            <option value="1000">1000</option>
          </select>

          <div className="select-arrow"></div>
        </div>
      </div>

    </div>
  );
};

export default CupSpecifications;