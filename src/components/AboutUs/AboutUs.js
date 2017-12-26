import React from 'react'
import './aboutus.css'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img5 from '../images/5.png'
class AboutUs extends React.Component {
  render () {
      return(
        <div>
          <div className='aboutus-1'>
            <Link to='/topic/create/sign'>
              <img className='aboutus-2' src={img44} alt=""/>
            </Link>
              <span className='aboutus-3'>关于我们</span>
          </div>

          <div className='aboutus-4'>
            <img src={img5} alt=""/>
            <p>帮你所看 随哼咔咔</p>
          </div>

          <div className='aboutus-5'>
            <p>官方微信: weijichao1125</p>
          </div>

          <div className='aboutus-6'>
            <p>联系邮箱: 727320883@qqcom</p>
          </div>

          <div className='aboutus-7'>
            <p>手机号: 1873353689</p>
          </div>

          <div className='aboutus-8'>
            <p>关于我们:</p>
          </div>

          <div className='aboutus-9'>
              <span>一个帮你实现你现在你想看不到的景象平台帮你了解现在发送的真实景象</span>
          </div>

        </div>
      )
  }
}

export default AboutUs;
