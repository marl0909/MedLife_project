import React from "react";
import './ListOfSpecialists.css'

export const ListOfSpecialists = (props) => {
    return (
        <div className={'specialists__item'}>
            <div  className={'specialists__item__photo shadow'} >
                <img src={props.photo}/>
            </div>
            <div className={'specialists__item__info'}>
                <p>{props.name},</p>
                <p>{props.realm}</p>
            </div>
        </div>
    )
}