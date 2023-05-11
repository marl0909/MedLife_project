import React, {useState} from "react";
import './Appointments.css';
import {doctors} from "../../assets/texts";
import {ListOfSpecialists} from "./ListOfSpecialists/ListOfSpecialists";
import {RequestForm} from "../Services/RequestForm/RequestForm";


export const Appointments = () => {
    const [isFormOpen, SetIsFormOpen] = useState(false);

    console.log(isFormOpen)

    return (
        <div id={'appointments'} className={'appointments-content'}>
            {isFormOpen && <RequestForm SetIsFormOpen={SetIsFormOpen}/> }

            <h3 style={{color: 'rgba(0, 119, 156, 1)'}}>You can make an appointment right here!</h3>
            <br/>
            <h3 style={{color: 'rgba(0, 119, 156, 1)'}}>Choose a specialist that you need or sign up for a first consultation.</h3>
            <div className={'sign-up-button shadow'}>
                <span onClick={() => {SetIsFormOpen(!isFormOpen)}}>Sign up for a consultation</span>
            </div><br/><br/><br/>
            <h1>Our specialists</h1>
            <div className={'specialists'}>
                {doctors.map(d => <ListOfSpecialists name={d.name} photo={d.photo} realm={d.realm}/>)}
            </div>
        </div>
    )
}