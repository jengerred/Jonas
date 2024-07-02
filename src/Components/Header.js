import React, { useState } from 'react';
import logo from '../Images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
import '../Header.css';

const styles = {
  logo: {
    width: '80px',
    maxWidth: '115px',
    objectFit: 'cover'
  },
  menuIcon: {
    fontSize: '24px'
  },
  dropdownMenu: {
    alignItems: 'center', 
    backgroundColor: '#121212',
    border: '1px solid #gray700',
    padding: '0.5rem 1rem',
    position: 'absolute',
    right: '0',
    top: '3rem',
    marginRight: '-2rem',
  }
};

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ];

  return (
    <div className="header-container">
      <div className="container">
        <img src={logo} style={styles.logo} />
        <div className="menu">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="right-block">
        <div className="right-align">
        <div className="toggle" onClick={() => setToggle(!toggle)}>
          <HeaderItem name={''} Icon={HiDotsVertical} />
          {toggle ? (
            <div className="dropdown" style={styles.dropdownMenu}>
              {menu.map((item, index) => index > 2 && (
                <HeaderItem name={item.name} Icon={item.icon} />
              ))}
            </div>
          ) : null}
        </div>
           
                 <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                        className="user-avatar" />
            </div>
            </div>
      </div>
    </div>
  );
}

export default Header;