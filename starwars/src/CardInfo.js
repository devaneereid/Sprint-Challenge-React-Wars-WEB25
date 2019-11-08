import React from "react";


const CardInfo = props => {
  
    return (
        <div className="chars_info" key= {props.key}>
        <h3>Name: {props.name}</h3>
            <p>Hair Color: {props.hair}</p>
            <p>Gender: {props.gender}</p>
        </div>
    );
}
export default CardInfo;