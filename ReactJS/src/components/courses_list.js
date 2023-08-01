import './Componentcss/courses_list.css';
function Courseslist(props){
    return(
       
<div className='box'>
        <img src={props.img} alt=""></img>
         <h4>{props.name}</h4>

</div>
    );
}

export default Courseslist;