import React from "react";
import './ListOfServices.css'

export const ListOfServices = (props) => {
    return (
        <div className={'service-item'}>
            <div className={'service-item__info'}>
                <span>{props.name}</span>
                <span style={{color: 'rgba(0, 119, 156, 1)'}} >${props.lowPrice}-${props.highPrice}</span>
            </div>
            <div className={'line'}></div>
        </div>
    )
}