import React from 'react'
import './header.css'
import ME from '../../assets/fb-avatar.jpg';

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello, I'm </h5> 
        <h1> Petra Crmarić </h1>
        <h5 className="text-light"> I'm learning React!</h5>
        <div className='me'>
          <img className="image" src={ME} alt=''/>
        </div>
      </div>
    </header>
  )
}

export default header