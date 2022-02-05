import React from 'react'
import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import {
  CalendarToday,
  LocationSearchingOutlined,
  MailOutlined,
  PhoneAndroid,
} from '@mui/icons-material'
const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddbtn'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <img
              src='https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-260nw-1505360618.jpg'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Jane Frances</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentityIcon className='userShowIcon' />
              <span className='showUserInfoTitle'>janefran99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarToday className='userShowIcon' />
              <span className='showUserInfoTitle'>1.24.1998</span>
            </div>
            <div className='userShowInfo'>
              <MailOutlined className='userShowIcon' />
              <span className='showUserInfoTitle'>jane@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <PhoneAndroid className='userShowIcon' />
              <span className='showUserInfoTitle'>+1 123 445 543 </span>
            </div>
            <div className='userShowInfo'>
              <LocationSearchingOutlined className='userShowIcon' />
              <span className='showUserInfoTitle'>New Jersey | USA </span>
            </div>
          </div>
        </div>
        <div className='userUpdate'></div>
      </div>
    </div>
  )
}

export default User
