import React from 'react'
import "./css/Main.css"
import Counter from './Follow'
import { RiMenuFill, RiMenuFoldLine, RiContactsBook2Line } from 'react-icons/ri';
import Image from './Image';
import Header from './Header';

import Footer from './Footer';

const style = {
  marginRight: 'auto',
  textAlign: 'left'
}
function Main(props) {
  return (
    <div>
      <Header name="intercontinental" />
      <div className='main'>

        <div className='top'>
          <div className='imf'>
            <div className='img_main' >
              <img className="image_main" src={props.content.pro_img} ></img>
            </div>

            <div className='content'>
              <div className='content2'>
                <span>
                  438 <br></br>folowers
                </span>
                <span>
                  1138<br></br> Following
                </span>
                <span>
                  438 <br></br>folowers
                </span>
              </div>
              <br></br>

              <div>
                <Counter />
              </div>
            </div>

          </div>
          <div style={style}>
            <p className='text-light'>InterContinental
</p>
            <p>Follow</p>
            <p>

            Travel Company The first global luxury hotel brand, pioneering international travel for 70 years. Explore the Stories of the #InterContinentalLife
            </p>
            <a href='intercontinental.com/life'>
            intercontinental.com/life
            </a>
          </div>
        </div>
        <div className='middle'>
          <span className='middle_p'>Call</span>
        </div>
        <div className='bottom'>
          <div className='imf'>
            <span className='bottom_icon'><RiMenuFill /></span>
            <span className='bottom_icon'><RiMenuFoldLine /></span>
            <span className='bottom_icon'><RiContactsBook2Line /></span>
          </div>
          <div className='bottomImage'>
          {props.content.post_img.map((object, i) => <Image cname= "image_bottom" src={object.src} id={i}  />)}

          </div>
        </div>
      </div>
      <Footer src={props.content.pro_img}/>
    </div>
  )
}

export default Main