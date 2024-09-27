import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function TestModule() {
  return (
    <>
    <div className='w-11/12 h-lvh ml-6  bg-white border border-slate-300 '>
        <div className='flex'>
              <Link to="/TestModule">
              <div className='w-28 pl-5 rounded-md bg-white mt-6 ml-4 border border-sky-500 text-sky-500 hover:bg-blue-900 hover:text-white'>All Tests</div>
              </Link>
              <Link to="CreateTest">
              <div className='w-32 pl-5 rounded-md bg-white mt-6 ml-4 border border-sky-500 text-sky-500 hover:bg-blue-900 hover:text-white'>Create Test</div>
              </Link>
              <Link to="TestResults">
              <div className='w-32 pl-5 rounded-md bg-white mt-6 ml-4 border border-sky-500 text-sky-500 hover:bg-blue-900 hover:text-white'>Test Results</div>
              </Link>
              
        </div>
            <Outlet></Outlet>
        </div>
    </>
  )
}

export default TestModule;