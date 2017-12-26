import React from 'react'
import './accountq.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import img19 from '../images/19.png'
class Accountq extends React.Component {
  render () {
          return(
            <div>
              <div className='accountq-1'>
                <Link to='/topic/create/prompt/prompte'>
                  <span className='accountq-2'>取消</span>
                </Link>
                  <span className='accountq-3'>积分兑换</span>
              </div>

              <div className='accountq-4'>
                <div className='accountq-5'>

                  <div className='accountq-6'>
                    <img src={img19} alt=""/>
                  </div>

                  <div className='accountq-7'>
                    <p>积分兑换</p>
                  </div>

                  <div className='accountq-8'>
                    <input type="text"/>
                  </div>

                    <div className='accountq-11'>
                      <span>现金余额 8600,全部提现</span>
                    </div>

                    <Link to='/topic/create/prompt/prompte'>
                      <div className='accountq-12'>
                        <button className='accountq-12-1'>确定</button>
                      </div>
                    </Link>

                    <div className='accountq-13'>
                      <p>2小时内到账</p>
                    </div>

                </div>
              </div>

                <Foot />
            </div>
          )
  }
}

export default Accountq;
