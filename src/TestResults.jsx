import React from 'react'

function TestResults() {
  return (
    <>
      <div className='flex place-content-between ml-4 mt-8 w-1/5'>
        <div>Select Batch</div>
        <select className='border border-gray-400 w-3/5 rounded-md'>
          <option>Select Batch</option>
        </select>
      </div>
    </>
  )
}

export default TestResults