import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {AiOutlineHeart ,AiOutlineMessage} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import {BsBookmark} from 'react-icons/bs';
import Like from './Like';
import './css/Post.css'
import Image from './Image';
import { useNavigate } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";


const st={
  paddingBotton : "20px",
}
const st2=
{
  width : "35%",
  marginLeft : "30%"
}

var obj2=localStorage.getItem('obj');
obj2= JSON.parse(obj2)
function Post(props) {
  let params = useParams();
  console.log(params)
  var id=parseInt(params.id)
  console.dir(obj2)
  console.log(obj2['post_img'][id].src)
// const params = new  useParams(search); 
// const IdFromURL = params.get('id'); 
  return (
    <span>
      <Header menu="2"/>
    <div style={st2} >
        
        <div className='post'>
            <div className="image_post_div">
                <Image cname="image_post" src={obj2['post_img'][id].src} /> 
             
            </div>
            <Like id={parseInt(params.id)} />
            {/* <div className='content'>
                <div className='post_icons'>
                  <div>
                  <Like cname='' />
                  <span><AiOutlineMessage/></span>
                  <span><FaTelegramPlane/></span>
                  </div>
                  <span><BsBookmark/></span>
                </div>
                <div className='post_data' onClick={() => window.location.href = `/comment/${params.id}`}>
                  <p>
                    abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd 
                  </p>
                  <p>
                  abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd 
                  </p>
                  <p>
                  abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd 
                  </p>
                  <p>
                  abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd abcd 
                  </p>
                </div>
            </div> */}
        </div>
       
    </div>
    <Footer src={obj2['pro_img']}/>
    </span>
    
  )
}

export default Post