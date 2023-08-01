import React from 'react';
import '../Pagescss/profile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Editprofile() {
    const navigate = useNavigate();
    const [file, setfile] = useState(null);
    const handle = (e) => {
        e.preventDefault();
        const id1 = sessionStorage.getItem('Teacher_id');
        const url = `http://localhost/upload_photo.php?id1=${id1}`;
        let fData = new FormData(e.target);
        fData.append('photo', file);
        axios.post(url, fData).then(res => alert(res.data)).catch(error => alert(error));
      }
      const [photo, setphoto] = useState([]);
      useEffect(() => {
        const id1 = sessionStorage.getItem('Teacher_id');
        fetch(`http://localhost/fetch_profile.php?id1=${id1}`)
          .then(response => response.json())
          .then(data => {    
            setphoto(data);
    
          });
      }, []);
  return (
    <div>
                <div class="container">
    <h1>Edit Profile</h1>
	<div class="row">
     <form onSubmit={handle}>
      <div class="col-md-3">
        <div class="text-center">
        { photo.map(photo=>(
      <div className='pic'>  
       <img src={'http://127.0.0.1:8887/'+photo.src} class="avatar img-circle" alt="avatar" />
      </div>
       ))
    }
          <h6>Upload a different photo...</h6>
          
          <label>Choose file: <input type='file' accept='.png, .jpg' name='photo' onChange={(e) => setfile(e.target.files[0])} required></input> </label>
        </div>
        <button type='submit' name='save' className='button'>Upload</button>
      </div>
      </form>
     
  </div>
</div>
    </div>
  )
}

export default Editprofile