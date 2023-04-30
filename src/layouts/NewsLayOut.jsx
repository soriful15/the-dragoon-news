import React from 'react';

import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
const NewsLayOut = () => {
    return (
        <div>
            <Header></Header>
        


            <Container>
          
                <Row>
                    <Col lg={9} sm><Outlet></Outlet></Col>
                    <Col lg={3} sm><RightNav></RightNav></Col>
                </Row>
            </Container>


            <Footer></Footer>




        </div>
    );
};

export default NewsLayOut;