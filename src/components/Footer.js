import React from 'react'
import { GrHomeRounded} from 'react-icons/gr';
import {FaSearch} from 'react-icons/fa';
import {BiMessageAdd} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai';
import "./css/Footer.css"
function footer
(props) {
  return (
    <div className='footer'>
        <span  onClick={() => window.location.href = `/`}>
        <GrHomeRounded/>
        </span>
        <span>
        <FaSearch/>
        </span>
        <span>
        <BiMessageAdd/>
        </span>
        <span>
        <AiOutlineHeart/>
        </span>
        <span>
        <div className='img'>
            <img className= "image" src={props.src} ></img>
        </div>
        </span>
        
    </div>
  )
}

export default footer
