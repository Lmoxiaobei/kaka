import React from 'react'
import './choice.css'
import { Link } from 'react-router-dom'
import img45 from '../images/45.png'
class Choice extends React.Component {
  render () {
    return(
      <div className='choice-0'>
        <Link to='/topic/create/home'>
          <img  src={img45} alt=""/>
        </Link>
      </div>
    )
  }
}

export default Choice;
