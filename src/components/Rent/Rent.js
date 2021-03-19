import React from 'react';
import Card from 'react-bootstrap/cjs/Card';
import { useHistory } from 'react-router';

const Rent = (props) => {
    console.log(props.rent);
    const { name, img } = props.rent;
    const history = useHistory();

    const handleRant = () => {
        history.push('/destination');
    }
    return (
        <div>
            <Card style={{ width: '18rem' }} onClick={handleRant}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Rent;
