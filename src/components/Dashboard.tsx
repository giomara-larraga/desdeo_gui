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

import { faRocket, faBrain, faCircleQuestion, faCircleUser, faClockRotateLeft, faDatabase, faLightbulb, faPenToSquare, faFlask } from '@fortawesome/free-solid-svg-icons';



export class Dashboard extends React.Component <{},{}> {
  constructor(props:any) {
    super(props);
  }
render() {
  return (
    <Container fluid={true} className='bg-light'>
      <Row>
        <Col className='main-content min-vh-100'>
          <Row>
            <h2 style={{paddingLeft:'3rem', paddingBottom:'3rem', margin:'0px'}}>Welcome to DESDEO</h2>
          </Row>
          <Row>
            <Col md={12}>
              <Row style={{paddingLeft:'3rem', paddingRight:'3rem', paddingBottom:'3rem'}}>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col sm={8}>
                          <div>
                            <p style={{fontWeight:'600', lineHeight:'1.5', marginBottom:'0', color:"gray"}}>Problems solved</p>
                            <h5 style={{fontWeight:'700', fontSize:'1.5rem', lineHeight:'1.375', color:'#f4317a'}}>5</h5>
                          </div>
                        </Col>
                        <Col sm={4} className='text-end'>
                          <div style={{width:'48px', height:'48px', color:'white',backgroundColor:'#f4317a', backgroundPosition:'50%', textAlign:'center', borderRadius:'0.5rem', display:'inline-block'}}>
                            <FontAwesomeIcon icon={faLightbulb} style={{fontSize:'1.3rem', position:'relative', top:'12px'}}/>
                          </div>
                        </Col>
                        </Row>
                      </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col sm={8}>
                          <div>
                            <p style={{fontWeight:'600', lineHeight:'1.5', marginBottom:'0', color:"gray"}}>Algorithms utilized</p>
                            <h5 style={{fontWeight:'700', fontSize:'1.5rem', lineHeight:'1.375', color:'#f4317a'}}>5</h5>
                          </div>
                        </Col>
                        <Col sm={4} className='text-end'>
                          <div style={{width:'48px', height:'48px', color:'white',backgroundColor:'#f4317a', backgroundPosition:'50%', textAlign:'center', borderRadius:'0.5rem', display:'inline-block'}}>
                            <FontAwesomeIcon icon={faFlask} style={{fontSize:'1.3rem', position:'relative', top:'12px'}}/>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                    <Row>
                      <Col sm={8}>
                        <div>
                          <p style={{fontWeight:'600', lineHeight:'1.5', marginBottom:'0', color:"gray"}}>Problems defined</p>
                          <h5 style={{fontWeight:'700', fontSize:'1.5rem', lineHeight:'1.375', color:'#f4317a'}}>5</h5>
                        </div>
                      </Col>
                      <Col sm={4} className='text-end'>
                        <div style={{width:'48px', height:'48px', color:'white',backgroundColor:'#f4317a', backgroundPosition:'50%', textAlign:'center', borderRadius:'0.5rem', display:'inline-block'}}>
                          <FontAwesomeIcon icon={faPenToSquare} style={{fontSize:'1.3rem', position:'relative', top:'12px'}}/>
                        </div>                        
                      </Col>
                    </Row>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={3}>
                  <Card>
                    <Card.Body>
                      <Row>
                        <Col sm={8}>
                          <div>
                            <p style={{fontWeight:'600', lineHeight:'1.5', marginBottom:'0', color:"gray"}}>Stored data</p>
                            <h5 style={{fontWeight:'700', fontSize:'1.5rem', lineHeight:'1.375', color:'#f4317a'}}>5</h5>
                          </div>
                        </Col>
                        <Col sm={4} className='text-end'>
                          <div style={{width:'48px', height:'48px', color:'white',backgroundColor:'#f4317a', backgroundPosition:'50%', textAlign:'center', borderRadius:'0.5rem', display:'inline-block'}}>
                            <FontAwesomeIcon icon={faDatabase} style={{fontSize:'1.3rem', position:'relative', top:'12px'}}/>
                          </div>                           
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row style={{paddingLeft:'3rem', paddingRight:'3rem', paddingBottom:'3rem'}}>
                <Col md={5}>
                  <Carousel className='carousel-dashboard'>
                  <Carousel.Item interval={5000} className='carousel-item'>
                    <img
                      className="d-block w-100"
                      src={documentationfigure}
                      alt="Image One"
                    />
                    <Carousel.Caption>
                      <h3>Learn more about DESDEO</h3>
                      <p>Sample Text for Image One</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item interval={5000} className='carousel-item'>
                    <img
                      className="d-block w-100"
                      src={contributefigure}
                      alt="Contribute to DESDEO"
                    />
                    <Carousel.Caption>
                      <h3>Contribute to DESDEO</h3>
                      <p>Sample Text for Image Two</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
                </Col>
                <Col md={7}>
                <Card>
                  <Card.Body>
                  <Card.Title>History</Card.Title>
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Date and Time</th>
                        <th>Problem</th>
                        <th>Algorithm</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </Table>
                  </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Dashboard;
