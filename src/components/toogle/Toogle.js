import React from 'react'
import "./toogle.css"
import Sun from "../../img/sun.png"
import Moon from "../../img/moon.png"
import { useContext } from 'react'
import { ThemeContext } from '../../context'
const Toogle = () => {

const theme = useContext(ThemeContext)

const handleClick=()=>{
    theme.dispatch({type:"TOGGLE"})
}



  return (
    <div className='t'>
<img src={Sun} alt="" className="t-icon" />
<img src={Moon} alt="" className="t-icon" />

<div className="t-button" onClick={handleClick} style={{left:theme.state.darkMode?0:25}}>



</div>

    </div>
  )
}

export default Toogle