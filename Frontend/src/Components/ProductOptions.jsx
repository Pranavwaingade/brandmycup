import React from 'react';
import '../Style/ProductOptions.css';

const ProductOptions = () => {
  return (
    <div className="part">

      <div className="option-group">
        <h3>Select Cup Size</h3>

        <label>
          <input type="radio" name="size" />
          150 ml
        </label>

        <label>
          <input type="radio" name="size" />
          250 ml
        </label>

        <label>
          <input type="radio" name="size" />
          350 ml
        </label>

        <label>
          <input type="radio" name="size" />
          500 ml
        </label>
      </div>

      <div className="option-group">
        <h3>Paper Quality</h3>

        <label>
          <input type="radio" name="quality" />
          Standard
        </label>

        <label>
          <input type="radio" name="quality" />
          Premium
        </label>

        <label>
          <input type="radio" name="quality" />
          Eco Friendly
        </label>
      </div>

      <div className="option-group">
        <h3>Shape</h3>

        <label>
          <input type="radio" name="shape" />
          Cylindrical
        </label>

        <label>
          <input type="radio" name="shape" />
          Flared Rim
        </label>

        <label>
          <input type="radio" name="shape" />
          Wide Bowl
        </label>

        <label>
          <input type="radio" name="shape" />
          Thick Tapered
        </label>
      </div>

    </div>
  );
};

export default ProductOptions;