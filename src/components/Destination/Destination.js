import { Button } from 'bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import fakeData from '../../fakeData.json';
import Booking from '../Booking/Booking';
import { vehicleContext } from '../Home/Home';
const Destination = () => {
    const { id } = useParams();
    const history = useHistory();
    const vehicle = fakeData.find(ve => ve.id == id);
    console.log(fakeData);
    console.log(vehicle);
    const [data, setData] = useState({});

    const { register, handleSubmit } = useForm();
    const onSubmit = e => {
        setData(vehicle);
    }

    // const [formData, setFormData] = useState({ email: null, password: null });


    // const onChangeHandler = (e) => {
    //     const key = e.target.name
    //     setFormData({ ...formData, [key]: e.target.value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     setData(vehicle);

    // }
    return (

        <div >
            <h1>{id}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                PickFrom:
                <select name="vehicle" ref={register}>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                    <option value="Dinajpur">Dinajpur</option>
                </select><br />
                PickTo:
                <select name="vehicle" ref={register}>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                    <option value="Dinajpur">Dinajpur</option>
                </select><br /><br />
                <input type="submit" />
            </form>
            {
                <div>
                    <h3>{data.name}</h3>
                    <img src={data.img} alt="" />
                </div>
            }

        </div >
    );
};

export default Destination;
