import React from 'react';
import './Componentcss/contact.css';
import Footer from './Footer';
import {faEnvelope, faLocation, faLocationArrow, faLocationPin, faMapLocation, faMapLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
function Contact() {
   
 return (
    <>
    <h1>Contact Us</h1>
     <div className='Allinone'>
      
     <div className="container3">
      <h1>Send us a any question or message</h1>
      <form className='formclass' id='contactform'>
                
          
                   
                <div class="input_field">
                  <input type="email" name="email" id='email' placeholder="Email" required  />
                </div>
                
 
                    <div class="input_field"> 
                      <input type="text" name="firstname" id='firstname' placeholder="First Name" required  />
                    </div>
                 
                  
                    <div class="input_field"> 
                      <input type="text" name="lastname" id='lastname' placeholder="Last Name" required  />
                    </div>
                    <div class="input_field"> 
                      <input type="textarea" name="message"placeholder="Message" required />
                    </div>

                <input  class="button" type="submit" value="Ssend"  />
                
              </form>
     </div>
     <div className='seconddiv'>
        <div><FontAwesomeIcon icon={faPhone} /> 0906449327</div>
        <div><FontAwesomeIcon icon={faEnvelope} /> mikiyas021@gmail.com</div>
        <div><FontAwesomeIcon icon={faLocationPin} /> Bahir Dar, Ethiopia</div>

     </div>
     </div>
     <Footer />
  </>
  )
};
  
export default Contact;