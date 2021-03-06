import React from 'react'
import './publish.css'
import Foot from '../Foot/Foot'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img21 from '../images/21.png'
import img35 from '../images/35.png'
import img34 from '../images/34.svg'
class Publish extends React.Component {
  render () {
        return(
          <div className='publish-0'>
            <div className='publish-1'>
              <Link to='/topic/create/home'>
                <img className='publish-2' src={img44} alt=""/>
              </Link>
                <span className='publish-3'>评论详情</span>
            </div>

            <div className='publish-4'>
              <div className='publish-5'>
                <span>评论(261)</span>
              </div>

              <div className='publish-6'>
                  <img className='publish-7' src={img35} alt=""/>
                  <span className='publish-6-1'>H.H</span>
                  <img className='publish-8' src={img21} alt=""/>
                  <div className='publish-9'>
                      <p className='publish-9-1'>古根海姆博物馆的外部非常补实无话,只是将博物馆的名字装饰了一下.平滑的白色混凝土覆盖在墙上,使它们仿佛更像一座巨大的雕塑而不是建筑物</p>
                      <div className='publish-9-1-1'>
                        <span className='publish-9-2'>BIG.BOSS</span>
                        <span className='publish-9-3'>:把你的回复读完之后我想去看一看了</span>
                      </div>
                  </div>
              </div>

              <div className='publish-10'>
                  <img className='publish-10-1' src={img34} alt=""/>
                  <span className='publish-10-2'>五海</span>
                  <img className='publish-10-3' src={img21} alt=""/>
                  <div className='publish-10-4'>
                    <p className='publish-10-5'>光是建筑外观就与众不同啊!</p>
                  </div>
              </div>

            </div>

            <div className='publish-11'>
                <input className='publish-12' type="text"/>
            </div>

          <Foot />
          </div>
        )
  }
}

export default Publish ;
