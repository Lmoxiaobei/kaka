import React from 'react'
import './cancel.css'
import img42 from '../images/42.png'
import img43 from '../images/43.png'
import Foot from '../Foot/Foot'
import { Link } from 'react-router-dom'
class Cancel extends React.Component {
  render () {
      return(
        <div className='cancel-0'>
            <div className='cancel-1'>
                  <input className='cancel-2' type="text" placeholder="请输入关键字" />
                  <img className='cancel-3' src={img42} alt=""/>
                  <Link to='/topic/create/home'>
                    <span className='cancel-4'>取消</span>
                  </Link>
            </div>
            <img className='cancel-5' src={img43} alt=""/>
            <Foot />
        </div>
      )
  }
}

export default Cancel;
