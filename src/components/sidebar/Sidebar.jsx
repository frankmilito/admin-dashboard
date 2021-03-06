import React from 'react'
import {
  Home,
  Timeline,
  TrendingUp,
  BarChart,
  Mail,
  ChatBubbleOutline,
  DynamicFeed,
  WorkOutline,
  Report,
  PermIdentity,
  Storefront,
  AttachMoney,
} from '@mui/icons-material/'
import './sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <Link to='/' className='link'><li className='sidebarListitem active'>
              <Home className='sidebarIcon' /> Home
            </li></Link>
            <Link to='/users' className='link'>
              <li className='sidebarListitem '>
              <PermIdentity className='sidebarIcon' /> Users
            </li>
            </Link>
            <Link to='/products' className='link'>
              <li className='sidebarListitem'>
              <Storefront className='sidebarIcon' /> Products
            </li>
            </Link>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListitem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListitem'>
              <TrendingUp className='sidebarIcon' /> Sales
            </li>
            
            <li className='sidebarListitem'>
              <AttachMoney className='sidebarIcon' /> Transactions
            </li>
            <li className='sidebarListitem'>
              <BarChart className='sidebarIcon' /> Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListitem '>
              <Mail className='sidebarIcon' /> Mail
            </li>
            <li className='sidebarListitem'>
              <DynamicFeed className='sidebarIcon' /> Feedback
            </li>
            <li className='sidebarListitem'>
              <ChatBubbleOutline className='sidebarIcon' /> Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListitem '>
              <WorkOutline className='sidebarIcon' /> Manage
            </li>
            <li className='sidebarListitem'>
              <Timeline className='sidebarIcon' /> Analytics
            </li>
            <li className='sidebarListitem'>
              <Report className='sidebarIcon' /> Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
