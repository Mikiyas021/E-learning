import './Componentcss/Maincontent.css';
import { Link } from 'react-router-dom';

import 'animate.css';
function Maincontent(){
   
    return(
    <div>
        <div className="single-slider bg_cover pt-150"  data-overlay="4">
            <div class="container">
                <div class="row">
                    <div class="col-xl-7 col-lg-9">
                        <div class="slider-cont">
                            <h1 data-animation="bounceInLeft" data-delay="1s" class="animate__animated animate__backInLeft" >Capital College of Bussiness and Health Science</h1>
                            <p data-animation="fadeInUp" data-delay="1.3s"  id="idtext">Capital College of business and health science was established in 2021 in Bahir dar, Ethiopia.<br/> This E-learning system helps students to learn anytime, anywhere!</p>
                            
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
        <div className='Maincontent'>
            <h1 class="animate__animated animate__pulse"> Background of the college</h1>

            <p className='Maincontent_p'>
Capital College of business and health science was established in 2021 in 
Bahir dar, Ethiopia. The vision of the college is becoming a 
first class business, technology and health Science University in east Africa by 2030 EC. 
And Our mission is delivering quality education, training, and problem solving community 
based research services, produce competent graduates in their knowledge, skill, and attitude 
that can potentially serve their country and people. 
The core values of the college are providing quality education and training, 
passion to serve to the community professionally, researching for social wellbeing, 

transparency and accountability, team work and impartiality, integrity and Excellency. 

E-Learning, or electronic learning, is the delivery of learning and training 
through digital resources. It is provided through electronic devices such as computers, 

tablets and even cellular phones that are connected to the internet. This makes it easy 
for users to learn anytime, anywhere, with few, if any, restrictions.

            </p>
   
        </div>
        
        
</div>
    );
}
export default Maincontent;