import React from "react";

export interface ContainerProps{
    children?: React.ReactNode;
}

function Container(props:ContainerProps) {
    return <div className="container">
        {props.children}
    </div>

}
export default Container