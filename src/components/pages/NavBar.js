import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {RiScissors2Fill} from 'react-icons/ri';
import {FaBars,FaTimes} from 'react-icons/fa';
import Button from '../button';
import './NavBar.css';
import {IconContext} from 'react-icons/lib'

function NavBar() {
    const [click,setClick] = useState(false);
    const handleClickFn = ()=>{
        setClick(!click);
    }

    const [button,setButton]=useState(true);
    const closeMobileMenu = ()=>setClick(false);
    const showButton=()=>{
        setButton(!(window.innerWidth<=960));
    }
    
    useEffect(()=>{
        showButton();
    },[button])

    window.addEventListener('resize',showButton);

  return (
    <div>
        <IconContext.Provider value={{ color:'#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                    <RiScissors2Fill className='navbar-icon'>
                        </RiScissors2Fill>
                        Bhavya Make Over Studio
                </Link>
                <div className='menu-icon' onClick={handleClickFn}>
                  {click?<FaTimes/>:<FaBars/>}
                </div>
                <ul className={click? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/services" className='nav-links'>
                            Services
                        </Link>
                    </li>
                    <li className='nav-btn'>
                        {button?<Link to='/sign-up'className='btn-link'>
                            <Button buttonStyle="btn--outline">
                                Contact Us
                            </Button>
                        </Link>:<Link to='/sign-up' className='btn-link'>
                        <Button buttonStyle="btn--outline" buttonSize="btn-mobile">
                             Contact Us
                        </Button>
                        </Link>}
                    </li>
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    </div>
  )
}

export default NavBar