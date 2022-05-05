import React from 'react'
import Header from './Header';
import Form from './Comment_Form';

import './css/Footer.css';
import './css/Header.css';
import { Routes, Route, useParams } from "react-router-dom";
import './css/Comment.css';
import Comment_Data from './Comment_Data';


function Comment() {
    const timeLeft =
     {
        float: "left",
        color: "#999"
      }

      let params = useParams();
      console.log(params)
      var id=parseInt(params.id)
      var obj2=localStorage.getItem('obj');

    obj2= JSON.parse(obj2)
    console.log(obj2['post_img'][id]['comment'][0].id)
    return (
    <div>
        <Header name="Comment" menu="0" />
        <div className='comment'>
        <div className='top'>

           
            {obj2['post_img'][id]['comment'].map((object, i) => <Comment_Data src ={ obj2['post_img'][id].src }cname= "image_bottom" text={object.text} id={object.id}  time={object.time}  />)}

        


        </div>
      
        </div>
        <Form/>
    </div>
  )
}

export default Comment