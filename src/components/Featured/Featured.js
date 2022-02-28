import react from 'react';
import  Carousel from 'react-bootstrap/Carousel';
import './Featured.css';

function Featured() {
  return (
    <div className='previewContainer'> 
    <div className='preview'>
      <Carousel>
        <Carousel.Item interval={1000}>
        <img
        className="d-block w-100"
        alt="First slide"
        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
        />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
    <Carousel.Item interval={500}>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q="
        alt="Second slide"
        />
        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://media.istockphoto.com/photos/amber-fort-and-maota-lake-jaipur-rajasthan-india-picture-id1135820309?k=20&m=1135820309&s=612x612&w=0&h=HTvXNokiDKSuL_D_jcEX8nwVMy5hs0zXBJ0E_zI5lxg="
        alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}
export default Featured;