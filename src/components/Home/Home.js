import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/cjs/Col';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import fakeDate from '../../fakeData.json';
import Rent from '../Rent/Rent';
import './Home.css';
const Home = () => {
    const [vehicle, setVehicle] = useState(fakeDate);
    console.log(vehicle);

    useEffect(() => {
        setVehicle(fakeDate);
        console.log(setVehicle(fakeDate));
    }, [])
    return (
        <div>
            <h1>Home</h1>
            <Container>
                <Row>
                    <Col xs={3} md={12} className="card-info">
                        {
                            vehicle.map(rent => <Rent rent={rent}></Rent>)
                        }
                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Home;
