import React from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import fakeData from '../../fakeData.json';
const Destination = () => {
    const { id } = useParams();
    const vehicleId = fakeData.find(vehicle => vehicle.id === id);
    console.log(vehicleId);
    const handleSubmit = () => {

    }
    return (

        <div >
            <h1></h1>
            < form onSubmit={handleSubmit} >
                <label for="cars">Pick From:</label><br />

                <select id="cars" name="cars">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="meDinajpurrcedes">Dinajpur</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                </select><br />

                <label for="cars">Pick to:</label><br />

                <select id="cars" name="">
                    <option value="Dhaka">Dhaka</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                </select><br /><br />
                <label for="start">From:</label>
                <input type="date" name="" id="" /><br />
                <label for="start">To:</label>
                <input type="date" name="" id="" /><br /><br />
                <input type="submit" value="Search" />
            </form >
        </div >
    );
};

export default Destination;
