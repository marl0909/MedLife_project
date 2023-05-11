import React from "react";
import './Services.css';
import {ListOfServices} from "./ListOfServices/ListOfServices";
import {otherServices, popularServices} from "../../assets/texts";
import {PopularServices} from "./PopularServices/PopularServices";

export const Services = () => {
    return (
        <div id={'services'} className={'services-container'}>
            <h1 style={{textAlign: 'center'}}>Popular Services</h1><br/>
            <div className={'popular-services'}>
                {popularServices.map(s => <PopularServices name={s.name} lowPrice={s.lowPrice} highPrice={s.highPrice}/>)}
            </div><br/><br/>
            <h1 style={{textAlign: 'center'}}>Other services</h1>
            {otherServices.map(s => <ListOfServices name={s.name} lowPrice={s.lowPrice} highPrice={s.highPrice}/>)}
            <br/><br/><br/>
            <p>Please note that <span style={{color: 'rgba(215, 69, 60, 1)'}}>these prices are approximate</span> and may vary depending on various factors such as location, clinic reputation, and insurance coverage. It's always best to consult with the clinic directly for more accurate pricing information.</p>
        </div>
    )
}