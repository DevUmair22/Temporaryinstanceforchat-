import React, { useState } from 'react';
import './widget.css'

function Widget({ label, count }) {
  

  return (
    <div className='widget flex gap-4'>
      <p className=''>{label}</p>
      <p className=''>{count}</p>
      {/* <button onClick={handleClick}>Increment</button> */}
    </div>
  );
}

export default Widget;
