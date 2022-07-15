import './App.css';
import { useState } from 'react';
import {app , storage } from "./firebaseConfig";
import{  ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';


export default function App() {
  const [data, setData] = useState({});
 
  const handleSubmit = () => {
    const storageRef = ref(storage, data.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
   uploadTask.on("state_changed", 
     (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log("Upload is " + progress + "% done");
  },

  (error) => {
      console.log(error.message);
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
  };
  return (
    <div className="App">
      <input type="file" onChange={(event) => setData(event.target.files[0])}/>
        <br />
        <button onClick = {handleSubmit}>Submit</button>
      </div>
  );
}

