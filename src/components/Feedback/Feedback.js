import React from 'react'
import './feedback.css'
import { Cascader } from 'antd';
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
class Feedback extends React.Component {

  render () {
    const options = [{
    value: 'zhejiang',
    label: '账号问题',
    children: [{
      value: 'hangzhou',
      label: '不能接收任务',
    }],
  }, {
    value: 'jiangsu',
    label: '其他',
    children: [{
      value: 'nanjing',
      label: '请您写下您的问题',
    }],
  }];
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
        return(
          <div className='feedback'>
            <div className='feedback-1'>
              <Link to='/topic/create/sign'>
                <img className='feedback-2' src={img44} alt=""/>
              </Link>
                <span className='feedback-3'>意见反馈</span>
            </div>

            <div className='feedback-4'>
              <p>请选择反馈类型</p>
            </div>

            <div className='feedback-5'>
              <Cascader options={options} onChange={onChange}
                placeholder="账号问题"showSearch/>
            </div>

            <div className='feedback-6'>
              <input type="text" placeholder="最多输入30字" />
            </div>

            <div className='feedback-7'>
              <p>功能反馈及其他</p>
            </div>

            <div className='feedback-8'>
              <p>积分兑换问题</p>
            </div>

            <div className='feedback-9'>
              <p>充值问题</p>
            </div>


            <Link to='/topic/create/sign'>
              <div className='feedback-10'>
                <button className='feedback-10-1'>提交</button>
              </div>
            </Link>


          </div>
        )
  }
}

export default Feedback;
