import { useState } from "react";

const Card = ({ name, position, image, description }) => {

    return <div id="card-container">
        <div className="card-inner">
            <div className="card-front">
                <img src={image} />
            </div>

            <div className="card-back">
                <span className="description">{description}</span>

            </div>
        </div>

        <div className="card-name">
            <span className="name">{name}</span>
            <span className="position">{position}</span>
        </div>
    </div>
}


export default Card;
