import React, { useContext, useEffect, useState } from "react";
import "./ViewPost.css";
function ViewPost() {
 
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src="https://i1.wp.com/maplestore.in/wp-content/uploads/2021/09/r1433_Starlight_PDP_Image_Position-1A_Avail__en-IN.jpg?fit=2048%2C2048&ssl=1"alt="" />
      </div>{" "}
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; 10000 </p>
          <span>Iphone 13</span>
          <p>Mobile</p>
          <span>01/03/22</span>
        </div>
        <div className="productDescription">
            <p className="p-bold">Product Description</p>
            <p>Lol</p>
            
          </div>
          <div className="contactDetails">
            <p className="p-bold">Seller details</p>
            <p>Name : Khushwant</p>
            <p>Phone : 7073684427</p>
          </div>
        
       
      </div>
    </div>
  );
}
export default ViewPost;