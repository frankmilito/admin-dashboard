import React from 'react'
import './user.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import {
  CalendarToday,
  LocationSearchingOutlined,
  MailOutlined,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
const User = () => {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to='/new-user'>
        <button className='userAddbtn'>Create</button></Link>
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
              <span className='showUserInfoTitle'>01-24-1998</span>
            </div>
            <span className='userShowTitle'>Contact Details</span>
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
        <div className='userUpdate'>
          <span className="userUpateTitle">Edit</span>
          <form  className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='janefran99' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Jane Frances' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='jane@gmail.com' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='+1 123 445 543 ' className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='New Jersey | USA' className='userUpdateInput'/>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src='https://image.shutterstock.com/image-photo/id-photo-portrait-businessman-suit-260nw-1505360618.jpg' alt="img" className='userUpdateImg'/>
                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                <input type="file" id="file" style={{display:'none'}}/>
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User
