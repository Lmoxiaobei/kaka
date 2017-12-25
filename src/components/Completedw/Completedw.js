import React from 'react'
import './completedw.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import img44 from '../images/44.png'
import img67 from '../images/67.png'
class Completedw extends React.Component {
  render () {
        return(
          <div>
            <div className='completedw-1'>
              <Link to='/topic/create/sign'>
                <img className='completedw-2' src={img44} alt=""/>
              </Link>
                <span className='completedw-3'>我的收藏</span>
            </div>
            <div>
              <img className='completedw-4' src={img67} alt=""/>
            </div>
            <Foot />
          </div>
        )
  }
}

export default Completedw;
