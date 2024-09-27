import React from 'react'
import logo from "./brillica-logo.jpg"
import style from "./header.module.css"
import img from './rounded_p.jpg'
import Logomodal from './Logomodal';
import { useState } from 'react';

function Component1() 

{
  

  const [modal,setModal]=useState(false);
function show(){
setModal((prev)=> !prev);
}

  return(
    
    <div className={style.head}>

      <div className={style.LeftHead}>
        <img onClick={show} src={logo} width={95}></img>
        {modal && <Logomodal show={show}></Logomodal>}
      </div>
        
      <div className={style.RightHead}>
      <i class="fa-regular fa-bell"></i>
       <img src={img}></img>
        <h2>Hi, Paras</h2>
        <i class="fa-solid fa-angle-down"></i>
      </div>

    </div>

  )
}

export default Component1;
