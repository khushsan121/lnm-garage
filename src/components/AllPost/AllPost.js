import React, { useContext,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "../PostCard/PostCard";
import "./AllPost.css";
function AllPost() {
    let allPost=[1,2,3,4,5,6,8,9,10,11,12,13,14,15,16];
    let displayAllPosts = allPost.map((product, index) => {
     return (
       <div className="all-post-card">
            {" "}
         <PostCard product={product} index={index} />{" "}
       </div>
     );
   });
   return (
     <div className="all-post-container">
        <div className="display-all-parent">
    <div className="container-allpost">{displayAllPosts}</div>
  </div>
      </div>
   
   )
}

export default AllPost;