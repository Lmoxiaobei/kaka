import React from 'react'
import './promptw.css'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
class Promptw extends React.Component {
  render () {
        return(
          <div className='promptw-0'>
            <div className='promptw-1'>
              <Link to='/topic/create/prompt'>
                <img className='promptw-2' src={img44} alt=""/>
              </Link>
                <span className='promptw-3'>系统通知</span>
            </div>

            <div className='promptw-4'>
              <span>2017-01-21</span>
            </div>

            <div className='promptw-5'>
                  <span className='promptw-5-1'>30秒带你体验随哼咔咔</span>
                  <div className='promptw-6'>
                    <p className='promptw-5-2'>随哼咔咔是一款可以随时随刻帮助你所想看到的任何一处场景,只要那个放有网络,有接单人,变能看见虽身不能处的地方的场景.</p>

                  </div>
            </div>

          </div>
        )
  }
}

export default Promptw;
