import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';




function Header() {
  return (
    <div className='header'>
      {/* <h1> This is a header Section </h1> */}
     <div className='fullHeader'>
      <div className='header_left'>
        <img src='https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1659868310~hmac=e9ab97d211df418ec7af4946b6ac12f0' alt=''/>
        <div className= "header_search">
          <SearchIcon />
          <input type="text"/>
        </div>
      </div>

      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title="Home"/>
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
        <HeaderOption Icon={ChatBubbleIcon} title="Messaging"/>
        <HeaderOption Icon={NotificationsIcon} title="Notification"/>
        <HeaderOption Avatar={AccountCircleRoundedIcon} />
      </div>
     </div>
    </div>
  )
}

export default Header