import React from 'react'
import './personaldata.css'
import { Link } from 'react-router-dom'
import Foot from '../Foot/Foot'
import img44 from '../images/44.png'
// import { Button } from 'antd';
import { Upload, message, Button } from 'antd';
import img16 from '../images/16.png'
import img30 from '../images/30.png'
class PersonalData extends React.Component {
  render () {
    const props = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};
        return(
          <div>
            <div className='personaldata-1'>
              <Link to='/topic/create/sign/setup'>
                <img className='personaldata-2' src={img44} alt=""/>
              </Link>
                <span className='personaldata-3'>修改个人资料</span>
            </div>

            <div className='personaldata-4'>
              <img className='personaldata-4-1' src={img16} alt=""/>
                <Upload {...props}>
                <Button>点击更换头像</Button>
                </Upload>
            </div>

            <div className='personaldata-5'>
                  <span className='personaldata-5-1'>昵称</span>
                  <span className='personaldata-5-3'>xx丶超</span>
                  <img className='personaldata-5-2' src={img30} alt=""/>
            </div>

            <div className='personaldata-6'>
                  <span className='personaldata-6-1'>性别</span>
                  <span className='personaldata-6-3'>男</span>
                  <img className='personaldata-6-2' src={img30} alt=""/>
            </div>

            <div className='personaldata-7'>
                  <span className='personaldata-7-1'>年龄</span>
                  <span className='personaldata-7-3'>22岁</span>
                  <img className='personaldata-7-2' src={img30} alt=""/>
            </div>

            <div className='personaldata-8'>
                  <span className='personaldata-8-1'>现居住地</span>
                  <span className='personaldata-8-3'>北京市 朝阳街</span>
                  <img className='personaldata-8-2' src={img30} alt=""/>
            </div>


            <div className='personaldata-9'>
                  <span className='personaldata-9-1'>个性签名</span>
                  <span className='personaldata-9-3'>江湖救急,助人为乐</span>
                  <img className='personaldata-9-2' src={img30} alt=""/>
            </div>



          <Foot />
          </div>
        )
  }
}

export default PersonalData;
