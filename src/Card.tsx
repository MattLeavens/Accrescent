import './Card.css';
import React from "react";

export interface CardProps{
    title: string;
    children?: React.ReactNode;
}

function Card (props:CardProps) {
    return <div className="card Card-Buffer">
        <div className="card-header">
            {props.title}
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>
}
 export default Card