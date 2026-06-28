import React from 'react'
import '../Style/FilterSidebar.css'

const FilterSidebar = () => {
  return (
    <>
      <div className="filter">
        <div className="Catergories innerfilter">
          <h2>Categories</h2>
          <input type="checkbox" />Tea Cups <br />
          <input type="checkbox" />Coffe Cups <br />
          <input type="checkbox" />Juice Cups <br />
          <input type="checkbox" />Ripple Cupsbr <br />
          <input type="checkbox" />Double Wall Cups <br />
          <input type="checkbox" />Ice Cream Cups <br />
        </div>
        <div className="size innerfilter">
          <h2>Cup Size</h2>
          <input type="checkbox" />150 ml <br />
          <input type="checkbox" />250 ml <br />
          <input type="checkbox" />350 ml <br />
          <input type="checkbox" />500 ml <br />
        </div>
        <div className="quality innerfilter">
          <h2>Paper Quality</h2>
          <input type="checkbox" /> Standard     <br />
          <input type="checkbox" /> Premium<br />
          <input type="checkbox" /> Eco-Friendly<br />
        </div>
        <div className="price innerfilter">
          <h2>Price</h2>
          100 <input type="range" min="100" step="any" max="1500" oninput="volumeOutput.value = this.value" /> 1500 <br />
        </div>
      </div>
    </>
  )
}

export default FilterSidebar