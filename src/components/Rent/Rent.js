import React from 'react';
import Card from 'react-bootstrap/cjs/Card';

const Rent = (props) => {
    console.log(props.rent);
    const { name, img } = props.rent;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Rent;
