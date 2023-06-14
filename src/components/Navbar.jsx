import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from "../styles"
import { navLinks } from "../constants/index"
import { logo, menu, close } from "../assets"

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav
      //w-full:full width of screen, z-20: it will be stacked over all elements
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {  //since Link is React-router-dom element so we can use onClick
            setActive("") //keep track where we are currently on the page
            window.scrollTo(0, 0)  //scrol to the top of the page
          }
          }
        >
          <img src={logo} alt='logo' className='w-20 h-20 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Snehashish Ghosh&nbsp;{/*<span className='sm:block hidden'>| My_Portfolio</span>*/}</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${ //if the links are inactive they will grey out
                active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)} // active is set to the title of the link( like: http://127.0.0.1:5173/#contact if clicked on contact)
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'> {/* For small device navigation */}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          {/* when menu is showing and I press/click the toggle then the menu will close */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl `}>
          {/* below ul will be same as previous except some changes */}
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${ //if the links are inactive they will grey out
                    active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setToggle(false) // as soon as I click an item in menu the list closes
                    setActive(link.title)
                    }} // active is set to the title of the link( like: http://127.0.0.1:5173/#contact if clicked on contact)
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar