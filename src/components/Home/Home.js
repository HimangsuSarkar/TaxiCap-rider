
import { useEffect } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/cjs/Col';
import Container from 'react-bootstrap/cjs/Container';
import Row from 'react-bootstrap/cjs/Row';
import fakeDate from '../../fakeData.json';
import Rent from '../Rent/Rent';
import './Home.css';


const Home = () => {
    const [vehicle, setVehicle] = useState(fakeDate);

    useEffect(() => {
        setVehicle(fakeDate);
    }, [vehicle])
    return (
        <div className="home">
            < Container >
                <Row>
                    <Col className="card-info">
                        {
                            vehicle.map(rent => <Rent rent={rent} key={rent.id}></Rent>)
                        }
                    </Col>
                </Row>
            </Container >
        </div >
    );
};

export default Home;
