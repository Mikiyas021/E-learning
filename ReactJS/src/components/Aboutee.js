import React from 'react';
import '../Pages/Pagescss/style1.css';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope, faLocation, faLocationArrow, faLocationPin, faMapLocation, faMapLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons';

import './Componentcss/Most.css';
import 'animate.css';
const About = () => {
  
return (

  <>   
  <div className='aboutcolleges2'>
  <div className='aboutcolleges'>
  <h1 class="animate__animated animate__zoomInLeft" id='abouttitle'>About Us</h1>
              <div className="containersquare">
                
      <div className="square">
        <div className="icon"><FontAwesomeIcon icon={faBullseye} /></div>
        <div className="title">Mission</div>
	<div className="text">Our mission is delivering quality education, training, and problem solving community based research services, produce competent
graduates in their knowledge, skill, and attitude that can potentially serve their country and people.</div></div>
      <div className="square">
        <div className="icon"><FontAwesomeIcon icon={faEye} /></div>
        <div className="title">Vision</div>
	<div className="text">The vision of the college is becoming a first class business, technology and health Science University in east Africa by 2030 EC</div>
      </div>
      <div className="square">
        <div className="icon"><FontAwesomeIcon icon={faThumbsUp} /></div>
        <div className="title">Why Choose Us</div>
	<div className="text">The core values of the college are providing quality education and training, passion to serve to the community professionally,
researching for social wellbeing, transparency and accountability, team work and impartiality, integrity and Excellency.</div>
      </div>
    </div>
    </div>
    <div className='seconddiv'>
      <h3>Contact Us</h3>
        <div><FontAwesomeIcon icon={faPhone} /> 0906449327</div>
        <div><FontAwesomeIcon icon={faEnvelope} /> mikiyas021@gmail.com</div>
        <div><FontAwesomeIcon icon={faLocationPin} /> Bahir Dar, Ethiopia</div>

     </div>
    </div>
      <Footer />
  </>
  )
};
  
export default About;