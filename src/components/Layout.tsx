import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
//import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/desdeo_logo.png';
import contributefigure from '../images/contribute.png'
import documentationfigure from '../images/learn.png'
import Nav from 'react-bootstrap/Nav'
import NavBar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Carousel from 'react-bootstrap/Carousel'
import Accordion from 'react-bootstrap/Accordion'
import { Outlet } from 'react-router-dom';
import { faRocket, faBrain, faCircleQuestion, faCircleUser, faClockRotateLeft, faDatabase, faLightbulb, faPenToSquare, faFlask } from '@fortawesome/free-solid-svg-icons';



export class Layout extends React.Component <{},{}> {
  constructor(props:any) {
    super(props);
  }
render() {
  return (
    <Container fluid={true} className='bg-light'>
      <Row>
        <Col sm="auto" className='bg-dark shadow p-0'>
          <NavBar className='d-flex flex-sm-column bg-dark align-items-center'>
          <NavBar.Brand href="#home" className='nav-brand flex-sm-column d-flex'>
            <img
              src={logo}
              width="30"
              height="30"
              alt="DESDEO"
            />
            <h6 className=''>DESDEO</h6>
          </NavBar.Brand>
          <Nav variant="pills" className='nav-item d-flex flex-sm-column bg-dark align-items-center'>
            <Nav.Item>
              <Nav.Link eventKey="1" className='nav-link d-flex flex-sm-column'>
                <FontAwesomeIcon icon={faRocket} size="lg"/> 
                <span>Solve</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2" className='d-flex flex-sm-column'>
                <FontAwesomeIcon icon={faBrain} size="lg"/> 
                <span>Problems</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" className='d-flex flex-sm-column'>
                <FontAwesomeIcon icon={faClockRotateLeft} size="lg"/> 
                <span>History</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" className='d-flex flex-sm-column'>
                <FontAwesomeIcon icon={faCircleQuestion} size="lg"/> 
                <span>FAQ</span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5" className='d-flex flex-sm-column'>
                <FontAwesomeIcon icon={faCircleUser} size="lg"/> 
                <span>User</span>
              </Nav.Link>
            </Nav.Item>
{/*             <NavDropdown title="Dropdown" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          </NavBar>
          {/* <div className='d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top'>
              <Link to="/" className="nav-link" style={{textDecoration:'none', flexDirection:"column", alignItems:"center", alignContent:"center"}}>
                <Button variant='default' className='p-0 align-items-center w-100'>
                <img
                            height="30"     
                            src={logo}
                            width="30"
                            className="d-inline-block align-top"
                            alt="DESDEO logo"
                          />
                  <h6 style={{margin:0}}>DESDEO</h6>
                </Button>
              </Link>
           
            <hr></hr>
            <Link to="/" className="nav-link" style={{textDecoration:'none', flexDirection:"column", alignItems:"center", alignContent:"center"}}>
              <Button variant="default" className='p-0 align-items-center w-100'>
                <FontAwesomeIcon icon={faRocket} size="lg"/> 
                <p style={{margin:0}}>Solve</p>
              </Button>
            </Link>

            <Link to="/" className="nav-link" style={{textDecoration:'none', flexDirection:"column", alignItems:"center", alignContent:"center"}}>
            <Button variant="default" className='p-0 align-items-center w-100'>
                <FontAwesomeIcon icon={faBrain} size="lg"/> 
                <p style={{margin:0}}>Problem</p>
            </Button>
            </Link>
            <Link to="/" className="nav-link" style={{textDecoration:'none', flexDirection:"column", alignItems:"center", alignContent:"center"}}>
            <Button variant="default" className='p-0 align-items-center w-100'>
                <FontAwesomeIcon icon={faClockRotateLeft} size="lg"/> 
                <p style={{margin:0}}>History</p>
            </Button>
            </Link>
            <Link to="/" className="nav-link" style={{textDecoration:'none', flexDirection:"column", alignItems:"center", alignContent:"center"}}>
            <Button variant="default" className='p-0 align-items-center w-100'>
                <FontAwesomeIcon icon={faCircleQuestion} size="lg"/> 
                <p style={{margin:0}}>FAQ</p>
            </Button>
            </Link>
            <Link to="/" className="nav-link" style={{textDecoration:'none', flexDirection:"column", alignItems:"center", alignContent:"center"}}>
              <Button variant="default" className='p-0 align-items-center w-100'>
                  <FontAwesomeIcon icon={faCircleUser} size="lg"/> 
                  <p style={{margin:0}}>User</p>
              </Button>
            </Link>
          </div> */}
        </Col>
        <Col className='main-content min-vh-100'>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
}

export default Layout;
