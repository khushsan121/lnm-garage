import react from 'react';
import Card from 'react-bootstrap/Card';
import Heart from '../Heart/Heart';
import './PostCard.css';
function PostCard() {
    return (
      <div className="card grow" >
         <Heart></Heart>
        <div className="image">
          <img src="https://i1.wp.com/maplestore.in/wp-content/uploads/2021/09/r1433_Starlight_PDP_Image_Position-1A_Avail__en-IN.jpg?fit=2048%2C2048&ssl=1"  alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; 10000 </p>
          <span className="category">Mobile </span>
          <p className="name"> Iphone 13</p>
        </div>
        <div className="date">
          <span>10/09/2021</span>
        </div>
      </div>
    );
  }
  export default PostCard;