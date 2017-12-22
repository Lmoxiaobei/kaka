import React  from 'react'
import { Link } from 'react-router-dom'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import './BootPage.css'
import Hammer from 'react-hammerjs'

class BootPage extends React.Component {
  state = {
    num : 0
  }
  handleLeft = () => {
    const{ num } = this.state
    if(num<3){
      this.setState({
        num:num+1
      })
    }
  }
  render () {
    const { num } = this.state
    let ml = `${num * -100}vw`
      return(
        <Hammer onSwipeLeft={this.handleLeft}>
            <div className='bootpage-0'>
                <div className='bootpage-1' style={{marginLeft:ml}}>
                  <img src={img1} alt=""/>
                  <img src={img2} alt=""/>
                  <img src={img3} alt=""/>
                  <Link to='/topic/create'>
                    <img src={img4} alt=""/>

                  </Link>

                </div>
            </div>
        </Hammer>
        )
  }
}

export default BootPage;
