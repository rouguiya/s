import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/heroImg.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header.js";

const Home = () => {
  return (
    <>
      <Header />
      
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p className="hero_subtitle"> Trending product in </p>
                  <h2>Make Your Interior More Minimalistic & Modern</h2>
                  <p>lorem ipsum</p>
                  <button className="buy_btn">
                    <Link to="">SHOP NOW</Link>{" "}
                  </button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero_img">
                  <img src={heroImg} alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="trending_Products">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="section_title"> Trending Products</h2>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;

/*import React from 'react';
import { Link } from 'react-router-dom';
import{ Container,Row,Col } from 'reactstrap';
import heroImg from '../assets/images/heroImg.png';
import '../styles/home.css';
import Helmet from './Helmet';

const Home = () => {
  const year = new Date().getFullYear();
  return 
    <Helmet title={Home}>

    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md='6'> 
          <div className='hero_content'>
       <p className='hero_subtitle'> Trending product in {year}</p>
       <h2>Make Your Interior More Minimalistic & Modern</h2>
       <p>lorem ipsum</p>
       <button className='buy_btn'><Link to=''>SHOP NOW</Link> </button>
          </div>
          </Col>
        <Col lg='6' md='6'>
          <div className='hero_img'>
            <img src={heroImg} alt='' />
           
          </div>
       </Col>
        </Row>
      </Container>
     </section>
      <section className='trending_Products'>
      <Container>
        <Row>
          <Col lg='12'>
            <h2 className='section_title'> Trending Products</h2>
          </Col>
        </Row>
      </Container>
    </section>
    </Helmet>
     
};

export default Home;*/
