import React from 'react';
import "./HeaderOption.css";
import {Avatar} from '@mui/icons-material/AccountCircleRounded';

function HeaderOption({Avatar, Icon, title}) {
  return (
    <div className='headerOption'>
        {Icon && <Icon className="headerOption_icon" />}
        {Avatar && <Avatar className="headerOption_Icon" src={Avatar} />}
        <h3 className='headerOpton_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption