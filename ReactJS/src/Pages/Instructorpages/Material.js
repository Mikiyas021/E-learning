
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import '../Pagescss/Material.css';
function Material() {

  const [file, setfile] = useState(null);
  const [filee, setfilee] = useState([0]);
  const [pdf, setpdf] = useState([0]);
  const [describe, setdescribe] = useState("");
  const [video, setvideo] = useState([]);
  const [list_class, setlistclass] = useState([]);
  const [class_name, setclass] = useState();
  const handle = (e) => {
    e.preventDefault();
    const id = sessionStorage.getItem('course_title');
    const url = `http://localhost/upload_video.php?id=${id}`;
    let fData = new FormData(e.target);
    fData.append('video', file);
    fData.append('describe', describe);
    axios.post(url, fData).then(res => alert(res.data)).catch(error => alert(error));
  }
  function handleoutline(e){
    e.preventDefault();
    const id = sessionStorage.getItem('course_title');
    const url = `http://localhost/upload_course_outline.php?id=${id}`;
    let fData = new FormData(e.target);
     fData.append('file', filee);
     axios.post(url, fData).then(res=>alert(res.data)).catch(error=>alert(error));

}
function handlepdf(e){
  e.preventDefault();
  const id = sessionStorage.getItem('course_title');
  const url = `http://localhost/upload_pdf_material.php?id=${id}`;
  let fData = new FormData(e.target);
   fData.append('file', pdf);
   axios.post(url, fData).then(res=>alert(res.data)).catch(error=>alert(error));

}
  useEffect(() => {
    fetch("http://localhost/fetch_video.php")
      .then(response => response.json())
      .then(data => {    
        setvideo(data);
        console.log(data);
        //setvideosrc('http://127.0.0.1:8887/'+data.src);
        //console.log(videosource);
      });
  }, []);
  useEffect(()=>{
    const id = sessionStorage.getItem('Teacher_id');
    fetch(`http://localhost/fetch_teacher_class.php?id=${id}`)
    .then(res=> res.json())
    .then(
        (result)=>{
            setlistclass(result)  
        }
    )
    
},[])
  
 
  return (
    <div>

      
      <h1>Upload Learning Material</h1>
      <div className='divflex'>
      <div  className='classlink'>
      <h3 className='chooseclass'>Choose class</h3>
   {
        list_class.map((classes)=>(
            <div id='btnclassname5'>
              <Link to="" onClick={()=>{
                window.sessionStorage.setItem('Class_name',classes.Class_name);
                window.sessionStorage.setItem('course_title',classes.Course_name);
                }} className='button-17' >{classes.Class_name} </Link>
            </div>
        )
        )  
       }
      </div>
      <div>
        <h1>Upload video</h1>
      <form onSubmit={handle} encType="multipart/form-data">
        <div className='divflex2'>
        <label>Choose file: <input type='file' accept='.mp4, .avi, .flv, .mov' name='video' onChange={(e) => setfile(e.target.files[0])} required></input> </label>
        <label>Desription: <input type='text' name='describe' onChange={(e)=>setdescribe(e.target.value)} required ></input></label>
        <label>To class: <input type='text' name='class' id='class' value={sessionStorage.getItem('Class_name')} onChange={(e)=>setclass(e.target.sessionStorage.getItem('Class_name'))} required/></label>
        <button type='submit' name='save' className='button'>Upload</button>
        </div>
      </form>
     
    </div>
    <div>
      <h1>Upload pdf </h1>
    <form onSubmit={handlepdf} encType="multipart/form-data">
        <div className='divflex2'>
        <label>Choose file: <input type='file' accept='.pdf' name='file' onChange={(e) => setpdf(e.target.files[0])} required></input> </label>
        <label>To class: <input type='text' name='class' id='class' value={sessionStorage.getItem('Class_name')} onChange={(e)=>setclass(e.target.sessionStorage.getItem('Class_name'))} required/></label>
        <button type='submit' name='save' className='button'>Upload</button>
        </div>
      </form>
    </div>
    <div>
      <h1>Upload Course Outline</h1>
    <form onSubmit={handleoutline} encType="multipart/form-data">
        <div className='divflex2'>
        <label>Choose file: <input type='file' accept='.pdf' name='file' onChange={(e) => setfilee(e.target.files[0])} required></input> </label>
        <label>To class: <input type='text' name='class' id='class' value={sessionStorage.getItem('Class_name')} onChange={(e)=>setclass(e.target.sessionStorage.getItem('Class_name'))} required/></label>
        <button type='submit' name='save' className='button'>Upload</button>
        </div>
      </form>
    </div>
    </div>
    <h1>Uploaded Materials</h1>
    <div className='Material'>
      { video.map(video=>(
      <div className='videotut'>  
       {video.description}
      <video controls>
       <source src={'http://127.0.0.1:8887/'+video.src} />
      </video>
      </div>
       ))
    }
    </div>
    </div>
  );
}

export default Material;