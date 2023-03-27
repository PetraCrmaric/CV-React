import React from 'react'
import './card.css'

const Card = ({title, content}) => {

  return (
    <div className='education'>
        <div className='education__head'>
            <h3>{title}</h3>
        </div>
        <div className='education__content'>
            <p> {content}  </p>
        </div>
    </div>
  )
}

export default Card