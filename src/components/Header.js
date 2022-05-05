import React, { Component } from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { BiDotsHorizontalRounded,BiDotsVerticalRounded } from 'react-icons/bi'
import "./css/Header.css"
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  render() {
    if (this.props.menu == 2) {
      return (
        <div>
          <div className='header_home'>
            <div className='img nav_img'>
              <img className="image" src="https://images.unsplash.com/photo-1651493284167-827aaab0f50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" ></img>
              <div className="nav_content">

              </div>
              
            </div>
            <span>{this.props.name}</span><span><a><BiDotsVerticalRounded /></a></span>
          </div>
          <div className="justhelp"></div>
        </div>)
    }
    if (this.props.menu == 1) {
      return (
        <div>

          <div className='header_home'>

            <span><a href="javascript:history.back()"> <AiOutlineArrowLeft /></a></span> <span>{this.props.name}</span><span><a><BiDotsHorizontalRounded /></a></span>
          </div>
          <div className="justhelp"></div>
        </div>)
    }
    else {
      return (
        <div>

          <div className='header_home'>

            <span><a href="javascript:history.back()"> <AiOutlineArrowLeft /></a></span> <span>{this.props.name}</span>
            <span></span>
          </div>
          <div className="justhelp"></div>
        </div>)
    }

  }
}

export default Header