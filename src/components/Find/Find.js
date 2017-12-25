import React from 'react'
import img29 from '../images/29.svg'
import './find.css'
import Foot from '../Foot/Foot'
import { Link } from 'react-router-dom'
import img20 from '../images/20.png'
import img21 from '../images/21.png'
import img22 from '../images/22.png'
import img26 from '../images/26.png'
import img27 from '../images/27.png'
import img28 from '../images/28.png'
import img30 from '../images/30.png'
import img31 from '../images/31.svg'
import img32 from '../images/32.svg'
import img33 from '../images/33.svg'
import img34 from '../images/34.svg'
import img35 from '../images/35.png'
import img36 from '../images/36.svg'
import img37 from '../images/37.svg'
import img38 from '../images/38.svg'
import img39 from '../images/39.svg'
import img40 from '../images/40.jpg'
class Find extends React.Component {
  render () {
    return(
      <div className='find-0'>
        <div className='find-1'>
          <img className='find-1-1' src={img29} alt=""/>
        </div>

        <div className='find-2'>
          <img className='find-2-8' src={img34} alt=""/>
          <span className='find-2-1'>泡沫</span>
          <img className='find-2-2' src={img22} alt=""/>
          <Link to='/topic/create/find/forward'>
            <img className='find-2-4' src={img30} alt=""/>

          </Link>
          <p className='find-2-3'>安徽宏村秀里驿境精品文化酒店，喜欢的可以去看看哦... </p>
          <img className='find-2-5' src={img31} alt=""/>
          <img className='find-2-6' src={img32} alt=""/>
          <img className='find-2-7' src={img33} alt=""/>
            <div className='find-2-9'>
              <span className='find-2-9-1'>58分钟</span>
              <img  className='find-2-9-2'src={img20} alt=""/>
              <span className='find-2-9-3'>宏村秀里精品文化酒店</span>
              <img  className='find-2-9-4'src={img26} alt=""/>
              <span className='find-2-9-5'>326</span>
              <img  className='find-2-9-6'src={img27} alt=""/>
              <span className='find-2-9-7'>70</span>
              <img  className='find-2-9-8'src={img28} alt=""/>
              <span className='find-2-9-9'>26</span>
            </div>
        </div>


        <div className='find-3'>
          <img className='find-3-8' src={img35} alt=""/>
          <span className='find-3-1'>初夏</span>
          <img className='find-3-2' src={img22} alt=""/>
          <img className='find-3-4' src={img30} alt=""/>
          <p className='find-3-3'>在乌镇，入夜后,和闺蜜一起在酒吧窗前喝一杯甘甜的“三白酒”，让人回味无穷,去年的这个时间我们同样坐在今天的位置，回忆着那是的点点滴滴...</p>
          <img className='find-3-5' src={img36} alt=""/>
          <img className='find-3-6' src={img37} alt=""/>
          <img className='find-3-7' src={img38} alt=""/>
            <div className='find-3-9'>
              <span className='find-3-9-1'>1小时</span>
              <img  className='find-3-9-2'src={img20} alt=""/>
              <span className='find-3-9-3'>浙江省桐乡市乌镇酒吧</span>
              <img  className='find-3-9-4'src={img26} alt=""/>
              <span className='find-3-9-5'>371</span>
              <img  className='find-3-9-6'src={img27} alt=""/>
              <span className='find-3-9-7'>128</span>
              <img  className='find-3-9-8'src={img28} alt=""/>
              <span className='find-3-9-9'>75</span>
            </div>
        </div>



        <div className='find-4'>
          <img className='find-4-5' src={img39} alt=""/>
          <span className='find-4-1'>陈 xx</span>
          <img className='find-4-2' src={img21} alt=""/>
          <img className='find-4-3' src={img30} alt=""/>
          <div>
            <img className='find-4-4' src={img40} alt=""/>
          </div>
        </div>

      <Foot />
      </div>
    )
  }
}

export default Find;
