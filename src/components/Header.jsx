import React,{useContext, useRef, useState} from 'react'
import { useEffect } from 'react'
import {Link} from 'react-scroll'
import {MdMenu,MdClose,MdLanguage} from 'react-icons/md'
import '../styles/Header.css'

import { useTranslation } from 'react-i18next';

const Header = () => {
  const [t ,i18next]= useTranslation()

  const Navbar = useRef('');
  const headerRef = useRef(null);

  
  
  useEffect( ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header__sticky')

      }
      else{
        headerRef.current.classList.remove('header__sticky')
  
      }
    })

    
  },[])
  
 

  const ToggleAdd = ()=> Navbar.current.classList.add('toggle__nav__add')
  const ToggleRemove = ()=> Navbar.current.classList.remove('toggle__nav__add')

  return (
    <header ref={headerRef}>
       <div className="navbar">
            <div className="title">
              <div className="menu">
                <MdMenu className='menu__buton' onClick={ToggleAdd}/>
               </div>
              <h1>iltireh.😃</h1>
            </div>
            <nav>
              <ul ref={Navbar}>
                  <li>
                    <Link to="Home" spy={true} smooth={true} offset={-100} duration={900} onClick={ToggleRemove}> <span>01.</span> Home</Link>
                  </li>
                  <li>
                    <Link to="About" spy={true} smooth={true} offset={20} duration={900} onClick={ToggleRemove}> <span>02.</span> {t("about")}</Link>
                  </li>
                  <li>
                    <Link to="Portefolio"  spy={true} smooth={true} offset={-20} duration={900} onClick={ToggleRemove}><span>03.</span>{t("project")} </Link>

                   </li>
                  <li>
                    <Link to="Contact" spy={true} smooth={true} offset={-50} duration={900} onClick={ToggleRemove}> <span>04.</span>{t("contact")} </Link>
                  </li>
                  <div className="closer">
                    <MdClose className='close__button' onClick={ToggleRemove}/>
                  </div>
              </ul>
              <div className="language">
                {
                  i18next.language === "fr" && 
                  <div className='containerLang'  onClick={()=> {i18next.changeLanguage('en')}}>
                      <MdLanguage className='icons'/>
                       <p>English</p>
                   </div>
                }
                {
                  i18next.language === "en" && 
                  <div className='containerLang'  onClick={()=> {i18next.changeLanguage('fr')}}>
                      <MdLanguage className='icons'/>
                       <p>Francais</p>
                    </div>
                }
              </div>   
             </nav>
            {/* <div className="menu">
                <MdMenu className='menu__buton' onClick={ToggleAdd}/>
            
            </div> */}
        </div>
        
    </header>

  )
}

export default Header