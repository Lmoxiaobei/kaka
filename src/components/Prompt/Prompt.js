import React from 'react'
import './prompt.css'
import img29 from '../images/29.svg'
import img35 from '../images/35.png'
import img46 from '../images/46.png'
import img47 from '../images/47.png'
class Prompt extends React.Component {
  render () {
        return(
          <div className='prompt-0-0'>
            <div className='prompt-0'>
                <img className='prompt-1' src={img29} alt=""/>
            </div>

            <div className='prompt-2'>
              <img className='prompt-2-1' src={img35} alt=""/>
              <div className='prompt-2-2'>
                <p className='prompt-2-3'>初夏</p>
                <span className='prompt-2-4'>在么?</span>
                <span className='prompt-2-5'>昨天 17 : 43</span>
              </div>
            </div>

            <div className='prompt-3'>
              <img className='prompt-3-1' src={img46} alt=""/>
              <div className='prompt-3-2'>
                <p className='prompt-3-3'>系统通知</p>
                <span className='prompt-3-4'>30秒带你体验随亨咔咔</span>
                <span className='prompt-3-5'>下午 01 : 25</span>
              </div>
            </div>


            <div className='prompt-4'>
              <img className='prompt-4-1' src={img47} alt=""/>
              <div className='prompt-4-2'>
                <p className='prompt-4-3'>欢迎加入随亨咔咔</p>
                <span className='prompt-4-4'>主人,小咔已恭候多时了,200积分奉上,可在钱包查收.有任何建议可直接在消息中回复小咔</span>
                <span className='prompt-4-5'>2017-01-15</span>
              </div>
            </div>


          </div>
        )
  }
}

export default Prompt;
