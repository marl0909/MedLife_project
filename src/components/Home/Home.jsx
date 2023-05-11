import React from "react";
import './Home.css';
import homePhoto from './../../assets/img/home-photo.png'
import {description} from "../../assets/texts";

export const Home = () => {
    return (
        <div id={'home'} className={'home-content'}>
            <div className='home-content__hero'>
                    <span> <span>Your heart </span>is in the reliable hands of our specialists!</span>
                <img className={'shadow'} src={homePhoto}/>
            </div>
            <div className={'home-content__description'}>
                <p>{description}</p> <br/>
                <p>Contact us to receive quality treatment for cardiovascular diseases!</p>
            </div>
        </div>
    )
}