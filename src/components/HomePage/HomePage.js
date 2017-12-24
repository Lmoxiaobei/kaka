import React from 'react'
import { Link } from 'react-router-dom'
import img5 from '../images/5.png'
import img6 from '../images/6.png'
import img7 from '../images/7.png'
import img8 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
import './homepage.css'
class HomePage extends React.Component {
  render () {
      return(
        <div className='homepage-0'>
          <img className='homepage-1' src={img5} alt=""/>
          <input className='homepage-2' type="text" placeholder="              请输入手机号" />
          <img className='homepage-6' src={img6} alt=""/>
          <input className='homepage-3' type="password" placeholder="              请输入密码" />
          <img className='homepage-7' src={img7} alt=""/>
          <span className='homepage-8'>忘记密码?</span>
          <span className='homepage-9'>重置</span>
          <br/>
          <Link to='/topic/create/home'>
            <button className='homepage-10'>登录</button>

          </Link>
          <p className='homepage-11'>or</p>
            <div className='homepage-12'>
              <p>
                <img src={img8} alt=""/>
                <img src={img9} alt=""/>
                <img src={img10} alt=""/>
              </p>
            </div>
          <button className='homepage-13'>随便看看</button>
        </div>
      )
  }
}

export default HomePage;
