import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <div>
                <h4>  Login With</h4> <br />
                <div className=''>
                    <Button variant="outline-primary" className='mb-2'><FaGoogle /> Login With Google</Button>
                    <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>
                </div>
            </div>

            <div>
                <h4>Find Us On</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebookSquare /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
                {/* <img src="" alt="" /> */}
            </div>
        </div>
    );
};

export default RightNav;