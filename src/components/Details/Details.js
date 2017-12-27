import React from 'react'
import './details.css'
import Foot from '../Foot/Foot'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img17 from '../images/17.png'
import img19 from '../images/19.png'
import img20 from '../images/20.png'
import img22 from '../images/22.png'
import img18 from '../images/18.jpg'
import img71 from '../images/71.png'
class Details extends React.Component {
  state = {
      abo:false,

  }
  handletwe=()=>{
    this.setState({
      abo:true
    })
  }
  // handletwew=()=>{
  //   this.setState({
  //     abo:false
  //   })
  // }
  render () {
        return(
          <div className='details-0'>
              <div className='details-1'>
                <Link to='/topic/create/home'>
                  <img className='details-2' src={img44} alt=""/>

                </Link>
                  <span className='details-3'>任务详情</span>
              </div>
              <div className='details-4'>
                  <img className='details-5' src={img17} alt=""/>
                  <div>
                    <span className='details-6'>an 然</span>
                    <img className='details-7' src={img22} alt=""/>
                  </div>
              </div>
              <div className='details-8'></div>

            <div className='details-9'>
                  <p className='details-10'>我想知道北京这个星巴克现在的客流量怎么样...</p>
                  <img className='details-10-1' src={img18} alt=""/>
                  <div className='details-12'>
                      <img className='details-13' src={img20} alt=""/>
                      <span className='details-14'>上海市浦东新区 988km 2017-03-09  5分钟前</span>
                      <img className='details-15' src={img19} alt=""/>
                      <span className='details-16'>50</span>
                  </div>
            </div>

            <div className='details-19'>
              <p className='details-18' onClick={this.handletwe}>接受任务</p>
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

export default Details;
