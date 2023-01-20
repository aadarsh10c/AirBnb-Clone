import React from "react";

export default function Card () {
    return (
        <div className="Card">
            <img src="src/assets/katy.png" alt="Katy Profile Pic" className="Card--profile" />
            <span className="Card--note">
                Sold Out
            </span>
            <div className="Card--rating">
                <img src="src/assets/Star.png" alt="Star" className="Card--rating-star" />
                <p className="Card--rating-text">
                    5.0 (6).USA
                </p>
            </div>
            <p className="Card--info">
                Life lessons with Katie Zaferes
            </p>
            <p className="Card--price">
               <b>From 136$</b> / person
            </p>
        </div>
    );
}