import React from 'react'
import './forward.css'
import { Link } from 'react-router-dom'
import img41 from '../images/41.png'
class Forward extends React.Component {
  render () {
        return(
          <Link to='/topic/create/find'>
            <div className='forward-0'>
              <img className='forward-1' src={img41} alt=""/>
            </div>
          </Link>
        )
  }
}

export default Forward;
