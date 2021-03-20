import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/cjs/Col';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import fakeDate from '../../fakeData.json';
import Rent from '../Rent/Rent';
import './Home.css';
import header from '../../images/Bg.png'

export const vehicleContext = createContext()
const Home = () => {
    const [vehicle, setVehicle] = useState(fakeDate);

    useEffect(() => {
        setVehicle(fakeDate);
    }, [])
    return (
        <vehicleContext.Provider value={[vehicle, setVehicle]}>
            < Container >
                <Row>
                    <Col xs={3} md={12} className="card-info">
                        {
                            vehicle.map(rent => <Rent rent={rent} key={rent.id}></Rent>)
                        }
                    </Col>
                </Row>
            </Container >
        </vehicleContext.Provider >
    );
};

export default Home;
