import React, { Component } from 'react'
import {AiOutlineHeart ,AiTwotoneHeart} from 'react-icons/ai';
import "./css/Comment.css"
export class Like2 extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            count :0
        }
    }
    update()
    {
        this.setState({
            count : this.state.count+1
        },()=>{
            console.log("count = ");
            console.log(this.state.count)
        })
        console.log(this.state.count)
    }
  render() {
      if (this.state.count%2==0)
      {
        return (
            <span className= {`hicon ${this.props.cname} `} onClick={()=>this.update()}>
                <AiOutlineHeart  />
            </span>
          )
      }
      else
      {
        return (
            <span className={`hicon ${this.props.cname} `} onClick={()=>this.update()} >
                <AiTwotoneHeart  />
            </span>
          )
      }

  }
}

export default Like2