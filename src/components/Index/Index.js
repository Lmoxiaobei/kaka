import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import img11 from '../images/11.png'
import img12 from '../images/12.png'
import img16 from '../images/16.png'
import img17 from '../images/17.png'
import img18 from '../images/18.jpg'
import img19 from '../images/19.png'
import img20 from '../images/20.png'
import img21 from '../images/21.png'
import img22 from '../images/22.png'
import img23 from '../images/23.jpg'
import img24 from '../images/24.jpg'
import img25 from '../images/25.jpg'
import img26 from '../images/26.png'
import img27 from '../images/27.png'
import img28 from '../images/28.png'
import img29 from '../images/29.svg'
import img13 from '../images/banner3.png'
import img14 from '../images/banner1.jpg'
import img15 from '../images/banner2.jpg'
class Index extends React.Component {
  state = {
    tabsTitle:[
      {
        id:1
      },
      {
        id:2
      },
      {
        id:3
      },
    ],
    show:0
  }
  handleClick = (ind) => {
    this.setState({
      show:ind
    })
  }

tumer = () => {
return  this.loop = setInterval( () => {
    let { show } = this.state
    show++
    if(show===3){
      show=0
    }
    this.setState({
      show:show
    })
  },4000)
}

componentDidMount(){
  this.loop = this.tumer()
}
handleEnter = () => {
  clearInterval(this.loop)
}
handleLeave = () => {
  this.loop = this.tumer()
}

  render () {

    let ml = `${this.state.show*-375}px`
        return(
          <div className='index-0'>
            <div className='index-1'>
              <Link to='/topic/create/index/choice'>
                <div className='index-1-2'>
                  <p className='index-1-3'>武汉</p>
                  <img className='index-1-4' src={img11} alt=""/>
                </div>
              </Link>
              <img className='index-1-1' src={img29} alt=""/>
              <img className='index-2' src={img12} alt=""/>
            </div>

            <div className='index-3' onMouseEnter={ this.handleEnter } onMouseLeave={ this.handleLeave }>
              <div className='index-4' style={{marginLeft:ml}}>
                <img src={img13} alt=""/>
                <img src={img14} alt=""/>
                <img src={img15} alt=""/>
              </div>
            </div>

            <div className='index-5'>
                <p className='index-5-3'>最新任务</p>
            </div>

            <div className='index-6'>
              <div className='index-7'>
                <p>想了解一下武汉市昌区汉街的街景和街上的几个咖啡厅里面的情况...</p>
                <img className='index-7-1' src={img16} alt=""/>
                <span className='index-7-2'>chen xx</span>
                <img className='index-7-3' src={img21} alt=""/>
                <img className='index-7-4' src={img19} alt=""/>
                <span className='index-7-5'>50</span>
                <div className='index-7-6'>
                  <img className='index-7-6-1' src={img20} alt=""/>
                  <span className='index-7-6-2'>上海市浦东区</span>
                </div>
              </div>
              <div className='index-8'>
                <p className='index-8-1'>我想知道这个星巴克现在的客流量怎么样...</p>
                <div><img className='index-8-2' src={img18} alt=""/></div>
                <img className='index-8-3' src={img17} alt=""/>
                <span>an 然</span>
                <img className='index-8-4' src={img22} alt=""/>
                <img className='index-8-5' src={img19} alt=""/>
                <span className='index-8-6'>100</span>
                  <div>
                    <img className='index-8-7-1' src={img20} alt=""/>
                    <span className='index-8-7-2'>合肥市包河区</span>
                  </div>
              </div>
            </div>

            <div className='index-9'>
                <p className='index-9-1'>今日推荐</p>
            </div>

            <div className='index-10'>
              <img className='index-10-1' src={img23} alt=""/>
              <img className='index-10-2' src={img25} alt=""/>
              <img className='index-10-3' src={img24} alt=""/>
              <div><p className='index-10-4'>所罗门-R-古根海娒美术馆（The Solomon R .Guggenheim Museum)</p></div>
              <div><p className='index-10-5'>古根海娒美术馆</p></div>
              <div className='index-11'>
                <img className='index-11-1' src={img26} alt=""/>
                <span className='index-11-2' >6326</span>
                <img className='index-11-3' src={img27} alt=""/>
                <span className='index-11-4' >70</span>
                <img className='index-11-5' src={img28} alt=""/>
                <span className='index-11-6' >261</span>
              </div>
            </div>


          </div>
        )
  }
}

export default Index;
