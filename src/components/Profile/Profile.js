import React, { Fragment, useState, useContext } from 'react';
import "./Profile.css";
import Navigation from "../Navigation/Navigation";
import SideBar from '../SideBar/SideBar';
import Footer from "../Footer/Footer";


const Create = () => {
    let [name, setName] = useState("");
    let [category, setCategory] = useState("");
    let [price, setPrice] = useState("");
    let [description, setDescription] = useState("");
    let [image, setImage] = useState();
    
  return (
    <Fragment>
        <Navigation />
        <SideBar />
        <div className="create-container"> 
        
      <div className="centerDiv">
      <span className="create-title">Hi Khushwant </span>
      <div className="photo-container">
      <img
          alt="Upload photos"
          width="200px"
          height="200px"
            
            src={image ? URL.createObjectURL(image) : "https://www.pngitem.com/pimgs/m/86-869093_upload-photos-icon-png-transparent-png.png"}
        ></img>
        <input className='custom-file-input btnx'
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        </div>
        <label >Name</label>
        <br />
        <input
          className="input"
          type="text"
          name="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          className="input"
          type="email"
          name="Email"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <br />
        <label>Phone Number</label>
        <br />
        <input
          className="input"
          type="text"
          name="Phone Number"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <br />
        <label>About You</label>
        <br />
        <input
          className="input"
          type="text"
          name="Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}

        />
        <br />
        

        <br />
        <br />
        <button className="uploadBtn" >
           Update
        </button>
      </div>
      </div>
      <Footer /> 
    </Fragment>
  );
};

export default Create;