import react from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import './Featured.css';

function Featured() {
  return (
    <div className='featuredContainer'> 
      <div className='featured'>
        <Carousel className='mycarousel'>
          <Carousel.Item>
            <img  src='https://www.alcortech.com/wp-content/uploads/2017/12/holiday-gift-840x300-1.jpg' alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src='https://www.alcortech.com/wp-content/uploads/2017/12/holiday-gift-840x300-1.jpg' alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img  src='https://www.alcortech.com/wp-content/uploads/2017/12/holiday-gift-840x300-1.jpg' alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>    
      </div>
    </div>
  )
}
export default Featured;