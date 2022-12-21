import React from 'react'
import '../styles/Portofolio.css'

import Projects from '../Project/Portefolio.js'
import ProjectPortaire from './ProjectPortaire'
import { useTranslation } from 'react-i18next';

const Portefolio = () => {
    const [t ,i18next]= useTranslation()
  return (
   <article className="portofolio" id='Portefolio'>
       <div className="title__project">
          <h1> <span>03.</span>{t("project")}</h1>
       </div>
    <main className='container__project'>
        <div className='container__portofolio'>                                              
                    {
                        Projects.map( (itme)=>(
                            <ProjectPortaire key={itme.id} {...itme} />
                        ))
                    }
        </div>
    </main>
   </article>
  )
}

export default Portefolio