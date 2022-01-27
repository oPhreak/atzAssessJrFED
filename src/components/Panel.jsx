import React from "react";
import "./styles/Panel.css";


//should use a flexbox here instead, hardcoding spacing is no fun
function Panel(props) {
    return (
        <div className="panel">
            <img src={props.img} alt="" />
            <p className="info">{props.brand}</p>
            <p className="info">{props.name}</p>
            <p className="info">{props.price}</p>
        </div>
    );
}

export default Panel;