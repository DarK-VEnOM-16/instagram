import React from 'react'
import {FaTelegramPlane} from 'react-icons/fa';
import './css/Comment_Form.css'

function Form() {
  return (
    <div className='comment_form'>
        <span>
            <FaTelegramPlane/>
        </span>
        <input placeholder='Add a comment as user...'>
        
        </input>
        <button>
        Post
        </button>
        
    </div>
  )
}

export default Form