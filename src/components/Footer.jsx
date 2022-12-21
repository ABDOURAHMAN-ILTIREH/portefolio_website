import {FaLinkedin, FaPhone,FaFacebook} from 'react-icons/fa'
import {MdMyLocation,MdEmail} from 'react-icons/md'

import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer>
        <div className="footer_container">
            <div className="">
                <h5>📌location</h5>
                <span>
                <MdMyLocation className='icons'/>
                <p>Balballah, Djibouti</p>
                </span>
            </div> 
            <div className="">
                <h5>📱Mobile</h5>
                <span>
                <FaPhone className='icons'/>
                <p>+253 77701703</p>
                </span>
            </div> 
            <div className="">
                <h5>👋🏾My Social Media</h5>
                <span>
                <FaLinkedin className='icons'/>
                  <p>Arfan Abdourahman</p>
                </span>
            </div> 
            <div className="">
                <h5>😃My Email</h5>
                <span>
                <MdEmail className='icons'/>
                <p>arfanabdourahman@gmail.com</p>
                </span>
            </div> 
        </div>
    </footer>
  )
}

export default Footer