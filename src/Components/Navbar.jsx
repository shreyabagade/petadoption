import React, { useContext, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { CgChevronDown } from 'react-icons/cg';
import { CgChevronUp } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Button,
  Box,
  useToast,
} from '@chakra-ui/react'


import './Navbar.css'
import { AboutPetfinder } from '../Pages/AboutPetfinder';
import { AdoptingPets } from '../Pages/AdoptingPets';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { authContext } from '../context/AuthContext';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FaRightFromBracket } from 'react-icons/fa6';
import logo from "../image/logo.png"

import { FaHeartCirclePlus} from 'react-icons/fa6';
import { FaUserAlt } from 'react-icons/fa';



const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toast = useToast()
  const {AuthLogin, AuthName, AuthLogoutFunc} = useContext(authContext)
  let navigate = useNavigate()

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

  let handleLogout = ()=>{
    toast({
      title: "Logged Out",
      status: 'error',
      duration: 2000,
      isClosable: true,
  })
  navigate("/")
  AuthLogoutFunc()
  localStorage.clear()
  }

  return (
    <div style={{ width: "90%", display: "flex", justifyContent: "space-evenly", height: "60px", position:"fixed", zIndex:"5", width:"100%", background:"white"  }}>
      <div style={{ width: "40%", display: "flex", margin: "auto", marginLeft: "40px", color: "#FF5A30",fontWeight:"bolder" }}>
        <Link to="/">
        <img width="60px" src={logo} alt="" />
        </Link>

        <h3 style={{marginRight:"10px", marginLeft:"10px"}}>About Purrfect Pets</h3>
        <h3  href="#" onClick={toggleNav} style={{ cursor: "pointer", width:"30px", fontSize:"20px", fontWeight:"bolder" }}> {isNavOpen ? <CgChevronUp /> : <CgChevronDown />}</h3>
      </div>

      <div style={{ width: "60%", display: "flex", justifyContent: "space-evenly", marginLeft: "30%", alignItems: "center" }}>


        {
          AuthLogin ? (
            <Box w="60%">
            <Menu>
              <MenuButton>{AuthName}</MenuButton>
              <MenuList>
                <Link to="/userProfile"><MenuItem> <FaUserAlt/> Profile</MenuItem></Link>
                <Link to="/adoptionPage"><MenuItem> <FaHeartCirclePlus/>Adopted Requests</MenuItem></Link>
                <MenuItem onClick={handleLogout}><FaRightFromBracket/>Log Out</MenuItem>
              </MenuList>
            </Menu>
            </Box>
          ) : (
            <div style={{ width: "60%", display: "flex", justifyContent: "space-evenly", marginLeft: "30%", alignItems: "center" }}>
            <span style={{ borderLeft: '1px solid gray', height: '50px', margin: '0 8px' }}></span>
            <Link to="/signup"><h3>Signup</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
            </div>
          )
        }

      </div>

      {isNavOpen && (
        <div style={{ position: "absolute", top: '52px', left: 0, width: '100%', backgroundColor: '#FF5A30', color: '#fff', transition: 'height 0.5s', boder:"1px solid red" }}>
          
          <ul style={{ listStyleType: 'none', padding: 0, display: "flex", justifyContent: "space-evenly", height: "60px", alignItems: "center" }}>
            <li><Menu >

  <MenuButton as={Text}  isLazy={true} color='#fff'>
  ADOPT OR GET INVOLVED
  </MenuButton>
</Menu></li>

<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  DOGS & PUPPIES
  </MenuButton>
  <MenuList color='#fff' bgColor="#F4717C" >
  <Link to="/dogadopt">
    <MenuItem bgColor="#F4717C">Dog Adoption</MenuItem>
    </Link>
  </MenuList>
</Menu></li>

<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  CATS & KITTENS
  </MenuButton>
  <MenuList color='#fff' bgColor="#F4717C" >
    <Link to="/catadopt">
      <MenuItem bgColor="#F4717C">Cat Adoption</MenuItem>
    </Link>
  </MenuList>
</Menu></li>

<li><Menu>
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  OTHER TYPES OF PETS
  </MenuButton>
  <MenuList color='#fff' bgColor="#F4717C">
    <MenuItem bgColor="#F4717C">Birds</MenuItem>
    <MenuItem bgColor="#F4717C">Exotic Pets</MenuItem>
    <MenuItem bgColor="#F4717C">Small & Furry Pets</MenuItem>
  </MenuList>
</Menu></li>
<li><Menu>
<Link to="/ContributionForm">
  <MenuButton as={Text}  isLazy={true} color='#fff'>
  
  CONTRIBUTION/DONATE
  
  </MenuButton>
  </Link>
</Menu></li>
          </ul>
        </div>
      )}

      <div className="hamburger-icon" onClick={toggleNav}>
        <GiHamburgerMenu />
      </div>
     
    </div>
  )
}

export default Navbar;


// Navbar.js

