import React from 'react'
import './task.css'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import Foot from '../Foot/Foot'
import img16 from '../images/16.png'
import img19 from '../images/19.png'
import img20 from '../images/20.png'
import img21 from '../images/21.png'
import img71 from '../images/71.png'
class Task extends React.Component {
  state = {
      abo:false
  }
  handletwe=()=>{
    this.setState({
      abo:true
    })
  }
  render () {
        return(
          <div className='task-0'>
              <div className='task-1'>
                <Link to='/topic/create/home'>
                  <img className='task-2' src={img44} alt=""/>
                </Link>
                  <span className='task-3'>任务详情</span>
              </div>

              <div className='task-4'>
                  <img className='task-5' src={img16} alt=""/>
                  <div>
                    <span className='task-6'>chen xx</span>
                    <img className='task-7' src={img21} alt=""/>
                  </div>
              </div>
              <div className='task-8'></div>

            <div className='task-9'>
                  <p className='task-10'>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的</p>
                  <p className='task-11'>情况.....</p>
                  <div className='task-12'>
                      <img className='task-13' src={img20} alt=""/>
                      <span className='task-14'>上海市浦东新区 988km 2017-03-09  5分钟前</span>
                      <img className='task-15' src={img19} alt=""/>
                      <span className='task-16'>50</span>
                  </div>
            </div>

            <div className='task-17'></div>

            <div className='task-19'>
              <p className='task-18' onClick={this.handletwe}>接受任务</p>
            </div>




            <div className='task-20' style={ {display : this.state.abo ? 'block' : 'none'} }>
              <div className='task-21'>
                  <div className='task-21-1'>
                    <img src={img71} alt=""/>
                    <p>注意事项</p>
                  </div>

                  <div className='task-22-1'>
                    <p>1.请尽量发布真实,有价值的问题答案</p>
                    <p>2.发布内容最多5张照片,视频时间不可超过10秒</p>
                  </div>

                  <div className='task-23-1'>
                    <p>1.所有发送内容都会被审核</p>
                    <p>2.禁止发送色情,血腥暴力等不当内容</p>
                    <p>3.如有违反随哼咔咔内容条约将会收到相应的惩罚,严重者追究法律责任</p>
                  </div>
                  </div>

                  <Link to='/topic/create/home/task/reply'>
                    <p className='task-24'>我知道了</p>
                  </Link>
                  </div>

          <Foot />
          </div>
        )
  }
}

export default Task;
