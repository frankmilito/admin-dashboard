import {VisibilityOutlined} from '@mui/icons-material'
import React from 'react'
import './widgetSm.css'
const WidgetSm = () => {
  return (
    <div className='widgetSm'>
      <span className='widgetSmTitle'>Newly Joined Members</span>
      <ul className='widgetSmList'>
        <li className='widgetSmListitem'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='img'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Franklin milito</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityOutlined className='widgetSmIcon' /> Display
          </button>
        </li>
        <li className='widgetSmListitem'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='img'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Franklin milito</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityOutlined className='widgetSmIcon' /> Display
          </button>
        </li>
        <li className='widgetSmListitem'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='img'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Franklin milito</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityOutlined className='widgetSmIcon' /> Display
          </button>
        </li>
        <li className='widgetSmListitem'>
          <img
            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            alt='img'
            className='widgetSmImg'
          />
          <div className='widgetSmUser'>
            <span className='widgetSmUsername'>Franklin milito</span>
            <span className='widgetSmUserTitle'>Software Engineer</span>
          </div>
          <button className='widgetSmButton'>
            <VisibilityOutlined className='widgetSmIcon' /> Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
