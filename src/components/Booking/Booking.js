import React from 'react';
import { useParams } from 'react-router';

const Booking = (props) => {
    console.log(props);
    const { name } = props;
    const { id } = useParams();
    return (
        <div>
            <p>This is booking:{id}</p>
            <h1>{id}</h1>
        </div>
    );
};

export default Booking;
