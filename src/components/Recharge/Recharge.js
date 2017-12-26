import React from 'react'
import './recharge.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import img68 from '../images/68.jpg'
import img69 from '../images/69.jpg'
class Recharge extends React.Component {
  render () {
        return(
          <div>
            <div className='recharge-1'>
              <Link to='/topic/create/sign'>
                <span className='recharge-2'>取消</span>
              </Link>
                <span className='recharge-3'>积分充值</span>
            </div>

            <div className='recharge-4'>
              <p>10元=100积分</p>
              <p>选择充值金额</p>
            </div>

            <div className='recharge-5'>
              <Button type="danger">10积分</Button>
              <Button type="danger">30积分</Button>
              <Button type="danger">50积分</Button>
              <Button type="danger">100积分</Button>
            </div>
            <div className='recharge-6'>
              <Button type="danger">200积分</Button>
              <Button type="danger">500积分</Button>
              <Button type="danger">1000积分</Button>
            </div>

            <div className='recharge-7'>
              <span className='recharge-7-1'>其他:</span>
              <input className='recharge-7-2' type="text"/>
              <span className='recharge-7-3'>积分</span>
            </div>

            <div className='recharge-8'>
              <p>选择支付方式</p>
            </div>

            <div className='recharge-9'>
              <Button type="danger" className='recharge-9-1'>
                <img className='recharge-9-2' src={img68} alt=""/>微信支付
              </Button>
              <Button type="danger" className='recharge-9-3'>
                <img className='recharge-9-4' src={img69} alt=""/>支付宝
              </Button>
            </div>

            <div className='recharge-10'>
              <p>支付金额:20元</p>
            </div>

            <Link to='/topic/create/sign'>
              <div className='recharge-11'>
                <button className='recharge-11-1'>确定</button>
              </div>
            </Link>


          </div>
        )
  }
}

export default Recharge;
