import React, { Component } from 'react'
import Like2 from './Like_count'
import {AiOutlineHeart ,AiTwotoneHeart} from 'react-icons/ai';
export class Comment_Data extends Component {
    
  render() {
    return (
        <div className='comment_box'>
        <div className='img'>
        <img className= "image" src={this.props.src} ></img>

    </div>
        <div className='comment_data'>
        <p>
            <b className='idname'>
                {this.props.id}
            </b>
            <span className='idtext'>{this.props.text}</span>
            <Like2 cname="hright"/>
        </p>
        <span  className='time-left'>{this.props.time}</span>
    </div>
    </div>
    )
  }
}

export default Comment_Data