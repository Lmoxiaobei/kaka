import React from 'react'
import './reply.css'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img20 from '../images/20.png'
import Foot from '../Foot/Foot'
class Reply extends React.Component {
  render () {
      return(
        <div className='reply-0'>
          <div className='reply-1'>
            <Link to='/topic/create/home'>
              <img className='reply-2' src={img44} alt=""/>
            </Link>
              <span className='reply-3'>回复任务</span>
          </div>

          <div className='reply-4'>
              <textarea name="" id="" rows="10" placeholder="请详细描述发布者的问题,以便更圆满的完成此次任务..."></textarea>
          </div>
          <div className='reply-5'>
            <span className='reply-5-1'>当前位置</span>
            <img src={img20} alt=""/>
            <span className='reply-6'>北京市 谷口镇司马台村1层</span>
          </div>


        <Link to='/topic/create/home'>
          <div className='reply-7'>
            <p className='reply-8'>发送</p>
          </div>      
        </Link>

        <Foot />
        </div>
      )
  }
}

export default Reply;
