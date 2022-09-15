import React from 'react'
import "./styles/GetStarted.css"
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export const GetStarted = () => {
  return (
    <div className="getStarted__wrapper">
        <input type="email" placeholder='Email Address'/>
        <button>Get Started{<KeyboardArrowRightIcon/>}</button>
    </div>
  )
}
