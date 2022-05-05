import React, { Component } from 'react'
import {AiOutlineHeart ,AiTwotoneHeart} from 'react-icons/ai';
import "./css/Comment.css"
import { AiOutlineMessage} from 'react-icons/ai';
import {BsBookmark} from 'react-icons/bs';
import {FaTelegramPlane} from 'react-icons/fa';
export class Like extends Component {
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
            <div className='content'>
            <div className='post_icons'>
              <div>
            <span className= {`hicon ${this.props.cname} `} onClick={()=>this.update()}>
                <AiOutlineHeart  />
            </span>
            <span><AiOutlineMessage/></span>
              <span><FaTelegramPlane/></span>
              </div>
              <span><BsBookmark/></span>
            </div>
            <div className='post_data' onClick={() => window.location.href = `/comment/${this.props.id}`}>
              <p>
              Liked by <b>aprendizdeamelie</b>, <b>aprendizdeamelie</b>, <b>appamasdsd</b>, <b>itz_dev</b>, <b>itz_me_uu_me</b> and
 
  {this.state.count} others
        </p>
              <p>
             gopro Photo of the Day: That feeling when you kick off the hiking boots + relax above it all. Following a grueling ascent, @luiscr94 set up camp overlooking Reinebringen, a coastal town in the Lofoten Islands.</p>
              <p>
              "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom." abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd 
              </p>
            </div>
        </div>
           
          )
      }
      else
      {
        return (
            <div className='content'>
            <div className='post_icons'>
              <div>
              <span className={`hicon ${this.props.cname} `} onClick={()=>this.update()} >
                <AiTwotoneHeart  />
            </span>
            <span><AiOutlineMessage/></span>
              <span><FaTelegramPlane/></span>
              </div>
              <span><BsBookmark/></span>
            </div>
            <div className='post_data' onClick={() => window.location.href = `/comment/${this.props.id}`}>
              <p>
              Liked by <b>aprendizdeamelie</b>, <b>aprendizdeamelie</b>, <b>appamasdsd</b>, <b>itz_dev</b>, <b>itz_me_uu_no_me</b> and

  {this.state.count} others
              </p>
              <p>
              gopro Photo of the Day: That feeling when you kick off the hiking boots + relax above it all. Following a grueling ascent, @luiscr94 set up camp overlooking Reinebringen, a coastal town in the Lofoten Islands.              </p>
              <p>
              "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom." abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd 
              </p>
            </div>
        </div>


          )
      }

  }
}

export default Like