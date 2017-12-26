import React from 'react'
import './account.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
class Account extends React.Component {
  render () {
      return(
        <div>
          <div className='account-1'>
            <Link to='/topic/create/prompt/prompte'>
              <span className='account-2'>取消</span>
            </Link>
              <span className='account-3'>零钱提现</span>
          </div>

          <div className='account-4'>
            <div className='account-5'>

              <div className='account-5-1'>
                <div className='account-6'>
                  <span>到银行卡</span>
                </div>
                <div className='account-7'>
                  <p>工商银行(9647)</p>
                  <p>体现到公司银行,手续费0.2%</p>
                </div>
              </div>


                <div className='account-8'>
                  <span className='account-8-1'>到微信账号</span>
                  <span className='account-8-2'>午后的阳光 (5695)</span>
                </div>

                <div className='account-9'>
                  <p>提现余额</p>
                </div>

                <div className='account-10'>
                  <input type="text"/>
                </div>

                <div className='account-11'>
                  <span>现金余额 8600,全部提现</span>
                </div>

                <Link to='/topic/create/prompt/prompte'>
                  <div className='account-12'>
                    <button className='account-12-1'>提现</button>
                  </div>
                </Link>

                <div className='account-13'>
                  <p>2小时内到账</p>
                </div>

            </div>
          </div>

            <Foot />
        </div>
      )
  }
}

export default Account;
