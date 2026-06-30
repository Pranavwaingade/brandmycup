import React from 'react'
import '../Style/QuantitySelector.css'

const QuantitySelector = () => {
   
  let count=1;

  function handeladd(){
    count=+1;
    console.log(count);
    return;
  }

  function handelmins(){

    return;
  }

  return (
    <>
    <div className="quan">
      <h2>Qunatity:<button onClick={handeladd}>+</button>  {count}  <button onClick={handelmins}>-</button></h2>
    </div>
    </>
  )
}

export default QuantitySelector