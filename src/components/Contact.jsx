import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'
import '../styles/Contact.css'
import {FaLinkedin, FaPhone,FaCheck,FaWindowClose,FaInstagram,FaFacebook, FaMedal,} from 'react-icons/fa'
import {MdMyLocation ,MdEmail} from 'react-icons/md'

import { useTranslation } from 'react-i18next';



const Contact = () => {
  const [t ,i18next]= useTranslation()
  const toggleRef = useRef();
  const form = useRef();

  const showMessage = (e)=>{
      toggleRef.current.classList.add('active');

      setTimeout(()=>{
        toggleRef.current.classList.remove('active');
       },3000);
    }

  const closeMessage = (e)=>{
    e.preventDefault();
   toggleRef.current.classList.remove('active');

  }

    

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4josuga', 'template_d6g1jls', form.current, 'W6cjkHK-5VWGriOGp')
      .then((result) => {
          console.log('message send');
      },
       (error) => {
          console.log(error.text);
      }
      );
      e.target.reset();
    };

  
  return (
    <main className="contact__wrapper" id='Contact'>
       <div className="title__contact">
          <h1><span>04.</span>{t("contact")} </h1>
       </div>
        <article className='list__wrapper'>
              <div className='form__wrapper'>
                <form ref={form} onSubmit={sendEmail} >
                  
                        <label htmlFor="name"> full name :</label>
                        <input type="text"  id='name' name='name' placeholder='your name'/>

                        <label htmlFor="email">email :</label>
                        <input type="eamil"  id='email' name='email' placeholder='your email' />

                        <label htmlFor="textarea">message</label>
                        <textarea name="message" id="textarea" cols="30" rows="10" placeholder='Message'></textarea>

                        <label htmlFor="select">occupation :</label>
                        <select name="" id="select">
                          <option value="front-end">front-end</option>
                          <option value="back-end">back-end</option>
                          <option value="full-stack">full-stack</option>
                        </select>

                        <button type='submit' value='Send'onClick={showMessage}>{t("send")}</button>
                </form>
              </div>

                <div className="social_contact">
                  
                 <span>
                    <a href="https://www.linkedin.com/in/arfan-abdourahman-346bab224/" rel='noopener' target='_blank'>
                      <FaLinkedin className='icons'/>
                      <p>Linkedin</p>
                    </a>
                 </span>
                 <span>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" rel='noopener' target='_blank'>
                    <MdEmail className='icons'/>
                    <p>Email Me</p>
                    </a>
                 </span>
                 <span>
                    <FaPhone className='icons'/>
                    <p>+253 77701703</p>
                 </span>
                </div>
        </article>
        <article className='toast__message' ref={toggleRef}>
             <div className="message__container">
                <FaCheck id='check'/>
                <div className="message">
                  <span className="text text-1">{t("success")}</span>
                  <span className="text text-2">{t("sendMessage")}</span>
                </div>
             </div>
                <FaWindowClose id='closer' onClick={closeMessage}/>
          </article>
    </main>
  )
}

export default Contact