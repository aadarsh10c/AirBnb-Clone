import React from "react";

export default function Card (props) {
    console.log(props);
    return (
        <div className="Card">
            <img src={ "src/assets/" + props.img } alt="Katy Profile Pic" className="Card--profile" />
            <span className="Card--note">
                Sold Out
            </span>
            <div className="Card--rating">
                <img src="src/assets/Star.png" alt="Star" className="Card--rating-star" />
                <p className="Card--rating-text">
                    {props.rating} ({props.reviewCount}).{props.country}
                </p>
            </div>
            <p className="Card--info">
                {props.title}
            </p>
            <p className="Card--price">
               <b>From {props.price}$</b> / person
            </p>
        </div>
    );
}