
import './App.css'
// import './New.css'
import { useState } from 'react';
import Header from "./Header"
import MainPanel from './MainPanel';
import Batch from './Batch'
import TestModule from './TestModule'
import Module from './Module'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Resources from './Resources';
import AllTests from "./AllTests"
import CreateTest from "./CreateTest"
import TestResults from "./TestResults"


function App() {

  

  return (
    <>
    
     <Header></Header>
     <BrowserRouter>
      <div className='flex'>
        <MainPanel></MainPanel>
        <Routes>
          
          <Route path='Module' element={<Module/>}></Route>
          <Route path='/' element={<Batch/>}></Route>
          <Route path='TestModule' element={<TestModule/>}>
            <Route index  element={<AllTests/>}></Route>
            <Route path='CreateTest' element={<CreateTest/>}></Route>
            <Route path='TestResults' element={<TestResults/>}></Route>
          </Route>
          <Route path='Resources' element={<Resources/>}></Route>

        </Routes>
        
      </div>
     </BrowserRouter>
     

    </>
  )
}

export default App;
