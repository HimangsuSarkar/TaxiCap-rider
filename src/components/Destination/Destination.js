
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import fakeData from '../../fakeData.json';



const Destination = () => {
    const { id } = useParams();
    const vehicle = fakeData.find(ve => ve.id === id);
    console.log(fakeData);
    const [data, setData] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setData(vehicle);
        console.log(data);
    }
    const { name, img, rent } = data;

    return (

        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                PickFrom:
                <select name="vehicle" defaultValue={vehicle} ref={register}>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                    <option value="Dinajpur">Dinajpur</option>
                </select><br />
                PickTo:
                <select name="vehicle" defaultValue={vehicle} ref={register}>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                    <option value="Dinajpur">Dinajpur</option>
                </select><br /><br />
                <input type="submit" />

            </form>
            <div>
                {
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{rent}</Card.Title>
                        </Card.Body>
                    </Card>
                }

                {
                    < Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{rent} or $7.6</Card.Title>
                        </Card.Body>
                    </Card>
                }
                {
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Title>{rent} or $5.88</Card.Title>
                        </Card.Body>
                    </Card>
                }

            </div>

        </div >
    );
};

export default Destination;
