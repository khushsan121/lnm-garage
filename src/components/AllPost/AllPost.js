import React, { useContext,useState } from "react";
import PostCards from "../PostCard/PostCard";
import "./AllPost.css";
function AllPost() {
    let allPost=[1,2,3,4,5,6];
    let displayAllPosts = allPost.map((product, index) => {
     return (
       <div className="all-post-card">
            {" "}
         <PostCards product={product} index={index} />{" "}
       </div>
     );
   });
   return (
    <div className="display-all-parent">
    <div className="container-allpost">{displayAllPosts}</div>
  </div>
   )
}

export default AllPost;