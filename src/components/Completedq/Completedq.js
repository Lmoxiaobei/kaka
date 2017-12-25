import React from 'react'
import './completedq.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import img44 from '../images/44.png'
import img67 from '../images/67.png'
class Completedq extends React.Component {
  render () {
        return(
          <div>
            <div className='completedq-1'>
              <Link to='/topic/create/sign'>
                <img className='completedq-2' src={img44} alt=""/>
              </Link>
                <span className='completedq-3'>已发布任务</span>
            </div>
            <div>
              <img className='completedq-4' src={img67} alt=""/>
            </div>
            <Foot />
          </div>
        )
  }
}

export default Completedq;
