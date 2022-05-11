import React from 'react';
import '../../style/Navbar/MobileNavigation.scss'
import NavLinks from './NavLinks';
import {HiOutlineMenu} from 'react-icons/hi';
import {CgClose} from 'react-icons/cg';
import { useState } from 'react';

const MobileNavigation = () =>{
      const [open, setOpen ] = useState(false);
      const hamburgerIcon = <HiOutlineMenu className='burgerIcon' size={'30px'} color={'#fff'} onClick={() => setOpen(!open)}/>;
      const closeIcon = <CgClose className='burgerIcon' size={'30px'} color={'#fff'} onClick={() => setOpen(!open)}/>;

      return (
        <nav className= 'mobileNavigation'>
            {!open ? hamburgerIcon: closeIcon }
            {open && <NavLinks />}
        </nav>  
      ); 
};

export default MobileNavigation;