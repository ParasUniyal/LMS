import React from 'react'

function Resources() {
  return (
    <>
        <div className='w-11/12 h-lvh ml-6  bg-white border border-slate-300 '>
            <div className='flex place-content-between'>
                <p className='mt-4 scale-125 text-slate-700 ml-8'>All Resources</p>
                <button className='mr-4 px-4 rounded-md scale-125 mt-4 text-sky-700 border border-sky-700'>Add Resources</button>
            </div>
                <div className=' bg-slate-200 border border-black w-96 m-auto h-96 rounded-lg ml- mt-16'>
                <div className=' w-44 m-auto'>
                    <i class="fa-regular fa-note-sticky ml-16"></i><br/>
                    No Resources Available
                </div>
                </div>
            
        </div>
    </>
  )
}

export default Resources