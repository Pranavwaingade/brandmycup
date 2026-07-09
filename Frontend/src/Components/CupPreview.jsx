import React from "react";
import "../Style/CupPreview.css";
import cupImage from "../img/paper-cup.png";
import logo from '../img/chatgpt.svg'

console.log(logo)

const CupPreview = () => {
  return (
    <div className="preview-container">

      <div className="cup-box">

        <img src={cupImage} alt="Paper Cup" className="cup-image" />

        <div className="viewlogo">
          <img src={logo}  alt="" />
        </div>

        <div className="brand-name">
          Crafted Maker
        </div>

        <div className="tagline">
          Your idea manufature YOu
        </div>

      </div>

    </div>
  );
};

export default CupPreview;