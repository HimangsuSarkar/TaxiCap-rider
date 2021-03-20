import React, { useContext, useEffect, useState } from 'react';
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

    // const [formData, setFormData] = useState({ email: null, password: null });


    // const onChangeHandler = (e) => {
    //     const key = e.target.name
    //     setFormData({ ...formData, [key]: e.target.value })
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setData(vehicle);

    }
    return (

        <div >
            <h1>{id}</h1>
            < form onSubmit={handleSubmit} >
                <label for="">Pick From:</label><br />

                <select id="" name="">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="meDinajpurrcedes">Dinajpur</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                </select><br />

                <label for="">Pick to:</label><br />

                <select id="" name="">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                </select><br /><br />
                <label for="start">From:</label>
                <input type="date" name="" id="" /><br />
                <label for="start">To:</label>
                <input type="date" name="" id="" /><br /><br />
                <input type="submit" value="clicked" />
            </form >
            <h5>
                {
                    data.name
                }
            </h5>
        </div >
    );
};

export default Destination;
