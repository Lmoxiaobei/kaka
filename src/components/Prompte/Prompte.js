import React from 'react'
import './prompte.css'
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import 'antd/dist/antd.css';
import img44 from '../images/44.png'
import img43 from '../images/43.png'
import img48 from '../images/48.png'
import img49 from '../images/49.png'
import img50 from '../images/50.png'
import img51 from '../images/51.png'
import img52 from '../images/52.png'
class Prompte extends React.Component {
  render () {
        return(
          <div>
            <div className='prompte-1'>
              <Link to='/topic/create/prompt'>
                <img  onClick={() => this.props.history.goBack()} className='prompte-2' src={img44} alt=""/>
              </Link>
                <span className='prompte-3'>我的账户</span>
                <img className='prompte-3-1' src={img48} alt=""/>
            </div>

            <div className='prompte-4'>
              <div className='prompte-4-1'>
                <img className='prompte-4-1-1' src={img49} alt=""/>
              </div>
              <div className='prompte-4-2'>
                <p className='prompte-4-2-1'>现金余额</p>
                <p className='prompte-4-2-2'>26.60</p>
              </div>
              <div className='prompte-4-3'>
                  <Button>提现</Button>
              </div>
            </div>


            <div className='prompte-5'>
              <div className='prompte-5-1'>
                <img className='prompte-5-1-1' src={img50} alt=""/>
              </div>
              <div className='prompte-5-2'>
                <p className='prompte-5-2-1'>积分余额</p>
                <p className='prompte-5-2-2'>180.00</p>
              </div>
              <div className='prompte-5-3'>
                  <Button>兑现</Button>
              </div>
            </div>

            <div className='prompte-6'>
              <img src={img43} alt=""/>
            </div>

            <div className='prompte-7'>
              <div className='prompte-7-1'>
                <img src={img51} alt=""/>
                <p>收支明细</p>
              </div>

              <div className='prompte-7-2'>
                <img src={img52} alt=""/>
                <p>常见问题</p>
              </div>
            </div>

          </div>
        )
  }
}

export default Prompte;
