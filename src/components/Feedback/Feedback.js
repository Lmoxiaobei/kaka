import React from 'react'
import './feedback.css'
import { Cascader } from 'antd';
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
class Feedback extends React.Component {

  render () {
    const options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }, {
        value: 'xiasha',
        label: 'Xia Sha',
        disabled: true,
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua men',
      }],
    }],
  }];
  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }
        return(
          <div>
            <div className='feedback-1'>
              <Link to='/topic/create/sign'>
                <img className='feedback-2' src={img44} alt=""/>
              </Link>
                <span className='feedback-3'>意见反馈</span>
            </div>

            <div className='feedback-4'>
              <p>请选择反馈类型</p>
            </div>

            <div>
              <Cascader
    options={options}
    onChange={onChange}
    placeholder="账号问题"
    showSearch
  />,
            </div>


          </div>
        )
  }
}

export default Feedback;
