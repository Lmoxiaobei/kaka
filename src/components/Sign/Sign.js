import React from 'react'
import './sign.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import { Button } from 'antd';
import img16 from '../images/16.png'
import img29 from '../images/29.svg'
import img30 from '../images/30.png'
import img58 from '../images/58.png'
import img59 from '../images/59.png'
import img60 from '../images/60.png'
import img61 from '../images/61.png'
import img62 from '../images/62.png'
import img63 from '../images/63.png'
import img64 from '../images/64.png'
import img65 from '../images/65.png'
import img66 from '../images/66.png'
import 'antd/dist/antd.css';
class  Sign extends React.Component {
  render () {
        return(
          <div>
            <div className='sign-1'>
              <img className='sign-1-1' src={img29} alt=""/>
            </div>

            <div className='sign-9'>
              <img className='sign-9-1' src={img16} alt=""/>

            <Link to='/topic/create/home'>
              <Button type="danger" className='sign-9-2'>
                <img className='sign-9-3' src={img58} alt=""/>签到
                </Button>            
            </Link>
                <p className='sign-9-4'>18282222222</p>
                <Button type="danger" className='sign-9-5'>我的名片</Button>
            </div>

            <Link to='/topic/create/prompt/prompte'>
              <div className='sign-2-0'>
                <div className='sign-2'>
                  <img className='sign-2-1' src={img59} alt=""/>
                  <div className='sign-2-2'>
                    <span className='sign-2-3'>我的账户</span>
                    <img className='sign-2-4' src={img30} alt=""/>
                  </div>
                </div>
              </div>
            </Link>

          <Link to='/topic/create/sign/recharge'>
            <div className='sign-3-0'>
              <div className='sign-3'>
                <img className='sign-3-1' src={img60} alt=""/>
                <div className='sign-3-2'>
                  <span className='sign-3-3'>积分充值</span>
                  <img className='sign-3-4' src={img30} alt=""/>
                </div>
              </div>
            </div>
          </Link>

          <div className='sign-4'></div>


            <Link to='/topic/create/sign/completed'>
              <div className='sign-5-0'>
                <div className='sign-5'>
                  <img className='sign-5-1' src={img61} alt=""/>
                  <div className='sign-5-2'>
                    <span className='sign-5-3'>已完成任务</span>
                    <img className='sign-5-4' src={img30} alt=""/>
                  </div>
                </div>
              </div>
            </Link>

          <Link to='/topic/create/sign/completed'>
            <div className='sign-6-0'>
              <div className='sign-6'>
                <img className='sign-6-1' src={img62} alt=""/>
                <div className='sign-6-2'>
                  <span className='sign-6-3'>已发布任务</span>
                  <img className='sign-6-4' src={img30} alt=""/>
                </div>
              </div>
            </div>
          </Link>


          <Link to='/topic/create/sign/completedw'>
            <div className='sign-7-0'>
              <div className='sign-7'>
                <img className='sign-7-1' src={img63} alt=""/>
                <div className='sign-7-2'>
                  <span className='sign-7-3'>我的收藏</span>
                  <img className='sign-7-4' src={img30} alt=""/>
                </div>
              </div>
            </div>
          </Link>



            <div className='sign-8'></div>


            <Link to='/topic/create/sign/feedback'>
              <div className='sign-12-0'>
                <div className='sign-12'>
                  <img className='sign-12-1' src={img64} alt=""/>
                  <div className='sign-12-2'>
                    <span className='sign-12-3'>意见反馈</span>
                    <img className='sign-12-4' src={img30} alt=""/>
                  </div>
                </div>
              </div>
            </Link>


            <Link to='/topic/create/sign/aboutus'>
              <div className='sign-10-0'>
                <div className='sign-10'>
                  <img className='sign-10-1' src={img65} alt=""/>
                  <div className='sign-10-2'>
                    <span className='sign-10-3'>关于我们</span>
                    <img className='sign-10-4' src={img30} alt=""/>
                  </div>
                </div>
              </div>
            </Link>

            <Link to='/topic/create/sign/setup'>
              <div className='sign-11-0'>
                <div className='sign-11'>
                  <img className='sign-11-1' src={img66} alt=""/>
                  <div className='sign-11-2'>
                    <span className='sign-11-3'>设置</span>
                    <img className='sign-11-4' src={img30} alt=""/>
                  </div>
                </div>
              </div>
            </Link>












          <Foot />
          </div>
        )
  }
}

export default Sign
