import React, { useState } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from 'react'
import emailjs from "emailjs-com";
import { useContext } from 'react'
import { ThemeContext } from '../../context'
const Contact = () => {
    const formRef=useRef()

const [done,setDone]=useState(false)
const theme = useContext(ThemeContext);
const darkMode=theme.state.darkMode;


    const handleSubmit=(e)=>{
        e.preventDefault()


         emailjs.sendForm('service_zztczf4', 'template_ixba59v', formRef.current, 'cjENIbCmdCoJRuoYB')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div 
    className='c'>

        <div className="c-bg"></div>
        <div className="c-wrapper">

<div className="c-left">

<h1 className="c-title">Lets discuss your project</h1>

<div className="c-info">

<div className="c-info-item">
<img  className="c-icon" src={Phone} alt="" />
<a href="tel:+91 7419084599" target="_blank" rel='noreferrer' > +91 7419084599</a>               
</div>
<div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              <a href=" mailto:gauravsehrawat16@gmail.com" target="_blank" rel='noreferrer' >gauravsehrawat16@gmail.com</a>
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
<a href="https://goo.gl/maps/a4FjMvuVdi5AqJTt8" target="_blank" rel='noreferrer'>Rewari,Haryana-123401</a>      
            </div>
</div>
</div>
<div className="c-right">
<p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
<form ref={formRef} onSubmit={handleSubmit} >
<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
    <button>Submit</button>
    {done && "Thank you for contacting me.. i will try to reply you as soon as possible "}
</form>
</div>

     </div>
    </div>
  )
}

export default Contact