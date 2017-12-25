import React from 'react'
import './completed.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import img44 from '../images/44.png'
import img67 from '../images/67.png'
class Completed extends React.Component {
  render () {
        return(
          <div>
            <div className='completed-1'>
              <Link to='/topic/create/sign'>
                <img className='completed-2' src={img44} alt=""/>
              </Link>
                <span className='completed-3'>已完成任务</span>
            </div>
            <div>
              <img className='completed-4' src={img67} alt=""/>
            </div>
            <Foot />
          </div>
        )
  }
}

export default Completed;
