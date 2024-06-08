


import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

import AboutSectionItem from './AboutSectionItem';


import image3 from '../assets/images/headerimages/IMG_7126.jpg'
import image2 from '../assets/images/headerimages/IMG_6492.jpg'
import image1 from '../assets/images/headerimages/IMG_7337.jpg'

import image4 from '../assets/images/galleryImages/2.jpg'
import image5 from '../assets/images/galleryImages/3.jpg'
import image6 from '../assets/images/galleryImages/5.jpg'
import image7 from '../assets/images/galleryImages/10.jpg'
import image8 from '../assets/images/galleryImages/14.png'
import image9 from '../assets/images/galleryImages/15.png'
import image10 from '../assets/images/galleryImages/16.png'
import image11 from '../assets/images/galleryImages/17.jpg'
import image12 from '../assets/images/galleryImages/9.jpg'

const menu = [
   
        {image: image12, title: 'Regular Marzipan Sweets Box', desc:'Almond, Sugar, Rose Water, Flavors Concentrate, Approx. 24 pcs/box', price: 20},
        {image: image8, title: 'Regular Marzipanwith Postachio', desc:'Almond, Sugar, Rose Water, Flavors Concentrate, Pistachio, Approx. 24 pcs/box', price: 30},
        {image: image6, title: 'Marzipan Baby Shower', desc:'Almond, Sugar, Rose Water, Flavors Concentrate, Approx. 30 (~1lb) pcs/box', price: 40},
     
        {image: image7, title: 'Marzipan Chocolate', desc:'Almond, Sugar, Chocolate, Rose Water, Flavors Concentrate, Approx. 30 pcs/box', price: 25},
        {image: image11, title: 'Macaron - Ghoraibeh', desc:'Macaron made from Almond, Eggs, Sugar, Rose Water, Flavors Concentrate, Approx. 15 pcs/box', price: 25},
        {image: image5, title: 'Marzipan Roll with Pistacio', desc:'Almond, Pistachio, Sugar, Rose Water, Flavors Concentrate, Approx. 24 pcs/box', price: 60},
 
        {image: image9, title: 'Date with Marzipan & Nuts', desc:'Date, Almond, Sugar, Rose Water, Flavors Concentrate, Approx. 25 pcs/box', price: 35},
        {image: image10, title: 'Marzipan Fruit', desc:'Almond, Sugar, Rose Water, Flavors Concentrate, Approx. 24 pcs/box', price: 40},
        {image: image4, title: 'Small Marzipan Sweets Box', desc:'Almond, Sugar, Rose Water, Flavors Concentrate, Approx. 26 (~1lb) pcs/box', price: 30},
    
]

const images = ['image1', 'image2', 'image3']

function Home() {

  return (
            <>
    
            <div className={"header-section " + images[Math.floor(Math.random() * (3) )]}>
                <h1>Almondy <span>Sweets</span></h1>
                {/* <p>Let our designers shed light on your situation!</p> */}

                <div className="btn-wrapper">
                    <Link to='/contact' className="header-btn-link">
                        <button className="header-button">Contact Us</button>
                    </Link>
                    
                </div>
                
            </div>

                
        <Container style={{ width: '100%'}} fluid className="justify-content-center align-items-center">
                <Row className='mt-5 text-center'> <Col><h1 style={{ fontFamily: "'Poppins', cursive"}} className='display-1'>Main Menu</h1></Col></Row>
                <Row style={{ width: '100%'}} className="justify-content-center mt-5">
                {menu.map((col, index) => {
                        return (
                            <Col sm={6} md={4} lg={3} style={{ display: 'flex', justifyContent: 'center'}} className="justify-content-center">
                                <Card style={{ width: '18rem' }} className='mb-5'>
                                <Card.Img variant="top" src={col.image}/>
                                <Card.Body>
                                    <Card.Title>{col.title}</Card.Title>
                                    <Card.Text>
                                    {col.desc}
                                    </Card.Text>
                                    <ListGroup className="list-group-flush">         
                                        <ListGroup.Item>${col.price}</ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                                </Card>
                            </Col>
                        );
                    })}
                    </Row>
                
                

        </Container>

                    
        <div className="about-container">
                <h5 className="about-title">Why Us</h5>
                <div className="about-wrapper">
                    <ul className="about-items">
                    <AboutSectionItem src={image3} text='At Almondy Sweets, we use only the finest ingredients to make our marzipan sweets. Each piece is made with high-quality almonds and natural sweeteners, ensuring a rich, authentic taste' title="Unparalleled Quality"/>
                    <AboutSectionItem src={image1} text='Every marzipan sweet from Almondy Sweets is handcrafted with meticulous attention to detail. From shaping and molding to decorating with precision' title="Handcrafted with Love"/>
                    <AboutSectionItem src={image2} text="Whether it's a wedding, birthday, corporate event, or holiday celebration, we work closely with you to design and create marzipan sweets that perfectly match your vision. " title="Custom Designs"/>
                    </ul>
                </div>

        </div>
        
 
        </>
  );
}

export default Home;
