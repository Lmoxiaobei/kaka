import React from 'react'
import './promptq.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import img44 from '../images/44.png'
import img16 from '../images/16.png'
import img35 from '../images/35.png'
class Promptq extends React.Component {
  render () {
        return(
          <div>
            <div className='promptq-1'>
              <Link to='/topic/create/prompt'>
                <img className='promptq-2' src={img44} alt=""/>
              </Link>
                <span className='promptq-3'>初夏</span>
            </div>

            <div className='promptq-4'>
              <p>17:43</p>
            </div>
            <div className='promptq-5'>
              <span className='promptq-5-1'>在吗?</span>
              <img className='promptq-5-2' src={img16} alt=""/>
            </div>

            <div className='promptq-6'>
              <img className='promptq-6-2' src={img35} alt=""/>
              <span className='promptq-6-1'>在呢</span>
            </div>

            <div className='promptq-7'>
                <input className='promptq-7-1' type="text"/>
            </div>

            <Foot />
          </div>
        )
  }
}

export default Promptq;
