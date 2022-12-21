import React from 'react'
import { useTranslation } from 'react-i18next';


import {FaRegFileCode, FaGithub} from  'react-icons/fa'
const ProjectPortaire = ({name,projectDisc,techUsing1,techUsing2,Link,LinkGithup}) => {
   const [t ,i18next]= useTranslation()
  return (
   <>
    <div className="wrapper__design">
        <div className="dash__link">
             <FaRegFileCode id='file_code'/>
              <a href={LinkGithup} rel='noopener' target='_blank'>
              <FaGithub id='github'/>
              </a>
        </div>
     <h1>{name}</h1>
     <p>{projectDisc}</p>
     <div className='technologie__code'>
        <p>{techUsing1}</p>
        <p>{techUsing2}</p>
     </div>
          <button>
            <a href={Link} rel='noopener' target='_blank'>{t("vers")}</a>
         </button>
    </div> 
   </>

  )
}

export default ProjectPortaire