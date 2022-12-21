import React from 'react'
import { useTranslation } from 'react-i18next';
import '../styles/Home.css'
const Home = () => {
  const [t ,i18next]= useTranslation()
  
  return (
    <section className='Home' id='Home'>
      <main className="container__home">
            <p id='salute'>{t("head")} </p>
            <h1>{t("name")}</h1>
            <h1 id='min'>{t("know")}</h1>
            <p>{t("build")}<span> html,</span>
             <span>css,</span> <span>javascript,</span>& {t("populary")}<span> react js</span>.
            </p>
            {/* <p className='telecharge__cv'>{t("telecharge")}</p> */}
      </main> 
    </section>
  )
}

export default Home
