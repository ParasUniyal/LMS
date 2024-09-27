import React from 'react'
import Portal from './Portal';

function Logomodal({show}) {
  return (
    <div>
        <Portal show={show}>
            <h1>hi bye</h1>
        </Portal>
    </div>
  )
}

export default Logomodal