import React from 'react';
import Header from '../Pages/Shared/Header/Header';
// import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftNav from '../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../Pages/Shared/RightNav/RightNav';
import { Outlet } from 'react-router-dom';
import NavigationNavBar from '../Pages/Shared/NavigationNavBar/NavigationNavBar';



const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationNavBar></NavigationNavBar>
            {/* <Outlet></Outlet> */}


            <Container>
          
                <Row>
                    <Col lg={3} sm> <LeftNav></LeftNav> </Col>
                    {/* <Col lg={6} sm><h2>main content comming</h2></Col> */}
                    <Col lg={6} sm><Outlet></Outlet></Col>
                    <Col lg={3} sm><RightNav></RightNav></Col>
                </Row>
            </Container>


            <Footer></Footer>
        </div>
    );
};

export default Main;