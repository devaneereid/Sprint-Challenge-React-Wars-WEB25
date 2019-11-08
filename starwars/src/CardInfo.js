import React from "react";
import styled from "styled-components";

const CharStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url('https://images.unsplash.com/photo-1566383497273-c4531742dbe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    opacity: 0.8;

    transition: transform 0.2s ease-in;
    &:hover {
        transform: translate(-5px) scale(1.10);
    }
`;
const NameStyles = styled.h3`
    color: #501E22;
    font-style: oblique;
    font-size: 1.4rem;
    background: #20CECD;
    border-radius: 10px;
    width: 225px;
    padding: 2px 5px;   
`;

const Features = styled.p`
    color: #C70542;
    font-size: 1.3rem;
    font-weight: bold;
    font-style: italic;
    ${CharStyles}:hover & {
        color: #8A64A0;
    }
`;


const CardInfo = props => {
  
    return (
        <CharStyles>
            <div className="chars_info" key= {props.key}>
            <NameStyles>
                <h3>Name: {props.name}</h3></NameStyles>
                <Features>
                    <p>Hair Color: {props.hair}</p>
                    <p>Gender: {props.gender}</p>
                </Features>
            </div>
        </CharStyles>
    );
}
export default CardInfo;