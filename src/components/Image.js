import React, { Component } from 'react'
import Post from './Post';

export class Image extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  change()
  {
    if(this.props.id != undefined)
    {   
    var id = this.props.id
      window.location.href = `/post/${id}`
    }
    else
      return 0
  }
  render() {

    if (this.props.src !=undefined)
    return (
      <img onClick={() => this.change()} className= {this.props.cname} src={this.props.src} ></img>
        
    )
  }
}

export default Image