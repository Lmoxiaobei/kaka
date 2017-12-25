import React from 'react'
import './foot.css'
import { Link } from 'react-router-dom'
import img53 from '../images/53.png'
import img54 from '../images/54.png'
import img55 from '../images/55.png'
import img56 from '../images/56.png'
import img57 from '../images/57.png'
class Foot extends React.Component {
  render () {
      return(
        <div className='foot'>

        <Link to='/topic/create/home'>
          <div className='foot-1'>
            <img src={img53} alt=""/>
            <p>首页</p>
          </div>
        </Link>

          <Link to='/topic/create/find'>
            <div className='foot-2'>
              <img src={img54} alt=""/>
              <p>发现</p>
            </div>
          </Link>

          <Link to='/topic/create/home'>
            <div className='foot-3'>
              <img src={img57} alt=""/>
              <p>发布</p>
            </div>
          </Link>

          <Link to='/topic/create/prompt'>
            <div className='foot-4'>
              <img src={img55} alt=""/>
              <p>消息</p>
            </div>
          </Link>

          <div className='foot-5'>
            <img src={img56} alt=""/>
            <p>我的</p>
          </div>

        </div>
      )
  }
}

export default Foot;
