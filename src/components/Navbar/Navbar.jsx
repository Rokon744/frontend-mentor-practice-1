import React, { useState } from 'react'
import './navbar.css'
import logo from '../assets/logo.svg'
import menu from '../assets/icon-menu.svg'
import menu_down from '../assets/icon-arrow-down.svg'
import menu_up from '../assets/icon-arrow-up.svg'
import menu_close from '../assets/icon-close-menu.svg'
import { dropdown } from '../data'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openDropdown1, setOpenDropdown1] = useState(false)
  const [openMobile, setOpenMobile] = useState(false)
  return (
    <div>
      <nav className='nav-section z-10 fixed bg-white w-full'>
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="nav-content justify-between items-start flex-1 hidden md:flex">
            <ul className='ml-10 flex space-x-5'>
              <li onClick={() => setOpenDropdown(!openDropdown)} className='flex items-center relative'>Features {openDropdown ? <img className='ml-2' src={menu_down} alt="" /> : <img className='ml-2' src={menu_up} alt="" />}
                {openDropdown ? <div className="dropdown-menu bg-white -left-16">
                  <ul>
                    {dropdown.map((item) => {
                      return <li key={item.id} className='flex items-center'><img className='mr-3' src={item.img} alt="" />{item.text}</li>
                    })}
                  </ul>
                </div> : ''}
              </li>
              <li onClick={() => setOpenDropdown1(!openDropdown1)} className='flex items-center relative'>Category {openDropdown1 ? <img className='ml-2' src={menu_down} alt="" /> : <img className='ml-2' src={menu_up} alt="" />}
                {openDropdown1 ? <div className="dropdown-menu bg-white">
                  <ul>
                    <li>History</li>
                    <li>Our team</li>
                    <li>Blog</li>
                  </ul>
                </div> : ''}
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div className="login">
              <button>Login</button>
              <button className='reg'>Register</button>
            </div>
          </div>
          <div className="menu-icon md:hidden">
            {openMobile ? <img onClick={() => setOpenMobile(!openMobile)} src={menu_close} alt="menu" /> :
              <img onClick={() => setOpenMobile(!openMobile)} src={menu} alt="menu" />}
          </div>

        </div>
      </nav >
      {
        openMobile ?
          <div className={`overflow-hidden responsive-nav right-0 mt-20'}`}>
            <ul>
              <li onClick={() => setOpenDropdown(!openDropdown)} className='mt-10'><span className='flex items-center'>Features <img className='ml-2' src={menu_down} alt="" /></span>
                {openDropdown ? <div className="">
                  <ul className='p-5'>
                    {dropdown.map((item) => {
                      return <li key={item.id} className='flex items-center'><img className='mr-3' src={item.img} alt="" />{item.text}</li>
                    })}
                  </ul>
                </div> : ''}
              </li>
              <li onClick={() => setOpenDropdown1(!openDropdown1)}> <span className='flex items-center'>Category <img className='ml-2' src={menu_down} alt="" /></span>
                {openDropdown1 ? <div>
                  <ul className='p-5'>
                    <li>History</li>
                    <li>Our team</li>
                    <li>Blog</li>
                  </ul>
                </div> : ''}
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div className="loginSign flex flex-col">
              <button>Login</button>
              <button className='reg'>Register</button>
            </div>
          </div> : ''
      }
    </div>
  )
}

export default Navbar
