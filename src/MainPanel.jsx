import React from 'react'
import {Link} from "react-router-dom"
import './New.css'


function MainPanel() {
  return (
    <>
        
        <div className="  w-40  bg-white border  shadow-xl border-r-4 border-slate-300" id='mainpanel'>
                    <Link to="Module">
                    <div className='  mt-8 w-32 pt-2 pb-2 ml-2 pl-2 rounded-md hover:bg-blue-900 hover:text-white hover:shadow-md hover:shadow-gray-800' ><i class="fa-solid fa-network-wired"></i> Module</div>
                    </Link>
                    <Link to="/">
                    <div className='  mt-8 w-32 pt-2 pb-2 ml-2 pl-2 rounded-md hover:bg-blue-900   hover:text-white hover:shadow-md hover:shadow-gray-800'><i class="fa-regular fa-calendar"></i> Batch</div>
                    </Link>
                    <Link to="TestModule">
                    <div className='  mt-8 w-32 pt-2 pb-2 ml-2 pl-2 rounded-md hover:bg-blue-900   hover:text-white hover:shadow-md hover:shadow-gray-800'  ><i class="fa-regular fa-address-card"></i> Test Module</div>
                    </Link>
                    <Link to="Resources">
                    <div className='  mt-8 w-32 pt-2 pb-2 ml-2 pl-2  rounded-md hover:bg-blue-900   hover:text-white hover:shadow-md hover:shadow-gray-800'><i class="fa-regular fa-copy"></i> Resources</div>
                    </Link>
                
        </div>
          

        
        
    </>
  )
}

export default MainPanel