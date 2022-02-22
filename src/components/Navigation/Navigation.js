import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Logo from '../../assets/images/logo.png';
import './Navigation.css';



function Navigation() {
    return (
   <div >
        <Navbar className='bg-dark-blue sticky-top'   >
        <Container >
            <Navbar.Brand  className='f2 text-white grow'href="#home">
                <img src={Logo} alt="logo" className='h3' />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">    
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success" className='green'>Search</Button>
            </Form>
            <Navbar.Text className='text-white pa2'>
                Signed in as: <a className='text-white underline i b' href="#login">User</a>
            </Navbar.Text>
            <NavDropdown  title="More"   id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1">Your Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Post An Ad</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Your ADs</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4" >Sign Out</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
        </Container>
        </Navbar>
   </div>
  
    );
}
 export default Navigation;         