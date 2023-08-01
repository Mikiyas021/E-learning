import './Pagescss/Front.css';
import '../components/Time.jsx';
import Footer from '../components/Footer';
import Maincontent from '../components/Maincontent';
import Time from '../components/Time.jsx';
import Allcourses from '../components/Courseslistall';
import Course from '../components/Course';
import About from '../components/Aboutee';
//import Navbar from '../components/Navbar';
//import {Navbar} from '../components/Navbar';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import {Navbar, Homepage, Aboutpage} from '../components/Navbar';
function Home(){
return(   

       <div className='Front'>
       
       <Maincontent />
       <Course/>
       <Allcourses/>
       <About />
       <Footer />
    </div> 
     
);
}

export default Home;

/*
      
  
    */


