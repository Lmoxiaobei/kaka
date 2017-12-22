import React from 'react'
import './clickenter.css'
import img5 from '../images/5.png'
class ClickEnter extends React.Component {
  render () {
      return(
        <div className='clickenter-0'>
        <img src={img5} alt=""/>
        <p className='clickenter-1'>随亨咔咔</p>
        <p className='clickenter-2'>帮你所看 随亨咔咔</p>
        <button className='clickenter-3'>点击进入</button>
        </div>
      )
  }
}

export default ClickEnter;
