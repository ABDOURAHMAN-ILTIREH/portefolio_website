import React from 'react'
import '../styles/About.css'
import image1 from '../imgesPortefolio/IMG_20220817_091017.png'

import Html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
// import git from '../assets/téléchargement (1).png'
import redux from '../assets/5848309bcef1014c0b5e4a9a.png'
import scss from '../assets/téléchargement.png'
// import githup from '../assets/github.png'
import mongoDb from "../assets/mongo.png"
import nodeJs from "../assets/node.png"

import { useTranslation } from 'react-i18next';

const About = () => {
   const [t ,i18next]= useTranslation()
   
  return (
   <section className="about__section"  id='About'>
        <main>
        <div className="title">
          <h1> <span>02.</span>{t("about")} </h1>
        </div>

         <div className="container__about">
         <div className="right__wrapper">
               <img src= {image1} alt="" />
         </div>
            <div className="left__wrapper">
                  <p className='mainParagh'>{t("hoppy")}<span>Html </span>, 
                    <span>Css </span>,<span>javascript</span> &<span> React Js</span>. {t("solid")}
                     <span> Sass</span> & <span> git/github</span>. {t("cuurenty")} <span>Node Js</span> {t("learn")}
                     <span> MongoDB</span>.</p>
                     <p className='mainParagh'>{t("goals")}</p>
                     <div className="skills__wrapper">
                        <h1>{t("skills")} :</h1>
                     <div className="skill__discrpt">
                        <h4>front-end technologie</h4>
                        <div className="navskill">

                           <ul className='main_ul'>
                              <li>
                                 <img src= {Html} alt="" id='clone__img' />
                                 html
                              </li>

                              <li>
                                 <img src= {css} alt="" id='clone__img' />
                                 css
                              </li>
                              <li>
                                 <img src= {scss} alt="" id='clone__img' />
                                 scss
                              </li>
                              <li>
                                 <img src= {javascript} alt="" id='clone__img' />
                                 javascript
                              </li>
                           </ul>
                           <ul className='main_ul2'>
                              <li>
                              <img src= {react} alt="" id='clone__img' />
                                 react js</li>
                              <li>

                              <img src= {redux} alt="" id='clone__img' />
                                 redux-toolkit</li>
                              <li>
                              <img src= {tailwind} alt="" id='clone__img' />
                                 tailwind css
                              </li>
                           </ul>
                        </div>
                     
                     </div>
                     <div className="skill__discrpt">
                        <h4>back-end technologie</h4>
                        <div className="navskill">

                           <ul className='main_ul'>
                              <li>
                                 <img src= {nodeJs} alt="" id='clone__img' />
                                 node.js
                              </li>

                              <li>
                                 <img src= {mongoDb} alt="" id='clone__img' />
                                 mongoDB
                              </li>
                           </ul>
                        </div>
                     </div>
               </div>
            </div>
         </div>
        </main>
    </section>
  )
}

export default About