import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary" className='mb-2'><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
                <div className='mt-3'>
                    <h5>Find us on</h5>
                    <ListGroup>
                        <ListGroup.Item className='mb-2' disabled><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitter /> Twitter</ListGroup.Item>
                        <ListGroup.Item className='mb-2'><FaTwitch />Twitch</ListGroup.Item>
                        <ListGroup.Item className='mb-2'>Porta ac consectetur ac</ListGroup.Item>
                    </ListGroup>
                </div>
            </ButtonGroup>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;