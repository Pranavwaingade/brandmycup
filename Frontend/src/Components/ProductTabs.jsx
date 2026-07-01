import React, { useState } from 'react'
import '../Style/ProductTabs.css'

const ProductTabs = () => {
  const [isdeascrib, setIsdeascrib] = useState();
  const [isspecific, setIsspecific] = useState();
  const [isreview, setIsreview] = useState();
  function handeldiscrib(e) {
    e.preventDefault(); // Prevent page reload on anchor click
    if (isdeascrib == true) {
      setIsdeascrib(false);
    }
    else {
      setIsdeascrib(true);
    }
  }

  function handelspecifi(e) {
    e.preventDefault(); // Prevent page reload on anchor click
    if (isspecific == true) {
      setIsspecific(false);
    }
    else {
      setIsspecific(true);
    }
  }

  function handelreview(e) {
    e.preventDefault(); // Prevent page reload on anchor click
    if (isreview == true) {
      setIsreview(false);
    }
    else {
      setIsreview(true);
    }
  }

  return (
    <div className='protab'>
      <h2 href="#" onClick={handeldiscrib}>Description</h2>
      {isdeascrib && (
        <>
          <p>Our premium paper cups are made from
            high-quality food-grade paper,
            designed for tea, coffee,
            and hot beverages.
             <br />
            These cups are durable,
            eco-friendly,
            and suitable for custom logo printing.</p>
        </>
      )}
      <h2 href="#" onClick={handelspecifi}>Specifications</h2>
      {isspecific && (
        <>
          <p>Capacity : 250ml</p>
          <p>Material : Food Grade Paper</p>
          <p>Printing : Offset Printing</p>
        </>
      )}

      <h2 href="#" onClick={handelreview}>Reviews</h2>
      {isreview && (
        <>
          <p>⭐⭐⭐⭐⭐</p>
          <p>Very good quality.</p>
          <p>-Rahul</p>
          ------------------------
          <p>⭐⭐⭐⭐☆</p>
          <p>Printing quality is amazing.</p>
          <p>-Priya</p>
        </>
      )}
    </div>


  )
}

export default ProductTabs