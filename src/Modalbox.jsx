import React from 'react'

function Modalbox({children}) {
  return (
    <div className='w-96 h-96 bg-white rounded-xl fixed top-7 left-1/4'>
        
        {children}
    </div>
  )
}
                     
export default Modalbox