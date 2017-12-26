import React from 'react'
import './setup.css'
import { Switch } from 'antd';
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img16 from '../images/16.png'
import img30 from '../images/30.png'
import Foot from '../Foot/Foot'
class SetUp extends React.Component {
  render () {
        return(
          <div>
            <div className='setup-1'>
              <Link to='/topic/create/sign'>
                <img className='setup-2' src={img44} alt=""/>
              </Link>
                <span className='setup-3'>设置</span>
            </div>



            <div className='setup-4'>
                <img src={img16} alt=""/>
            </div>


            <Link to='/topic/create/sign/setup/personaldata'>
              <div className='setup-5'>
                    <span className='setup-5-1'>修改个人资料</span>
                    <img className='setup-5-2' src={img30} alt=""/>
              </div>
            </Link>


              <div className='setup-6'>
                    <span className='setup-6-1'>修改密码</span>
                    <img className='setup-6-2' src={img30} alt=""/>
              </div>

              <div className='setup-7'>
                    <span className='setup-7-1'>清除缓存</span>
                    <span className='setup-7-2'>210MB</span>
              </div>

              <div className='setup-8'>
                    <span className='setup-8-1'>是否公开我的消息</span>
                    <Switch className='setup-8-2' defaultChecked />
              </div>

              <div className='setup-9'>
                    <span className='setup-9-1'>接收新消息通知</span>
                    <Switch className='setup-9-2' defaultChecked />
              </div>

              <Link to='/topic/create'>
                <div className='setup-10'>
                  <button className='setup-10-1'>退出登录</button>
                </div>
              </Link>

            <Foot />
          </div>
        )
  }
}

export default SetUp;
