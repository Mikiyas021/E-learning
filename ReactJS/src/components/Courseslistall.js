import Courseslist from './courses_list';
import IT from './images/cs.png';
import HS from './images/Hs.jpg';
import MS from './images/Ms.jpg';
import ML from './images/download.jpg';
import  '../components/Componentcss/courses_list.css';
function Allcourses(){
    return(
<div className='courseslist'>
     <Courseslist
    img={IT}
    name="Information Technology"/>
     <Courseslist
    img={HS}
    name="Health Science"/>
     <Courseslist
    img={MS}
    name="Management"/>
     <Courseslist
    img={ML}
    name="Medical Laboratory"/>
     <Courseslist
    img={IT}
    name="Information Technology"/>
     <Courseslist
    img={HS}
    name="Health Science"/>
     <Courseslist
    img={MS}
    name="Management"/>
     <Courseslist
    img={ML}
    name="Medical Laboratory"/>
</div>
    );
}
export default Allcourses;