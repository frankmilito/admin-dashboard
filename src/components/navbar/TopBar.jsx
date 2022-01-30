import React from 'react'
import './topbar.css'
import {Notifications, Language, Settings} from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import profile from '../../assets/young.jpeg'
// import LanguageIcon from '@mui/icons-material/Language'
const TopBar = () => {
  return (
    <div className='topbar'>
      <div className='topbarWrapper'>
        <div className='topleft'>
          <span className='logo'>Frankadmin</span>
        </div>
        <div className='topbight'>
          <div className='toprightIcons'>
            <div className='icon'>
              <Badge badgeContent={2} color='primary'>
                <Notifications />
              </Badge>
            </div>
            <div className='icon'>
              <Language />
            </div>
            <div className='icon'>
              <Settings />
            </div>
            <img
              //   src='https://www.pexels.com/photo/man-in-red-jacket-1681010/'
              src={profile}
              alt='Profile'
              className='profilePic'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
