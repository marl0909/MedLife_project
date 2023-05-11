import React from "react";
import './PopularServices.css'

export const PopularServices = (props) => {
    return (
        <div className={'popular-service__item shadow'}>
            <p>{props.name}</p>
            <span style={{color: 'rgba(0, 119, 156, 1)'}}>${props.lowPrice}-${props.highPrice}</span>
        </div>
    )
}