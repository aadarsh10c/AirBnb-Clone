import React from "react";

export default function Card (props) {
    //console.log(props);
    let data = props.item;
    let badgeText
    if (data.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (data.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="Card">
            <img src={ "../assets/img/" + data.coverImg } alt="Katy Profile Pic" className="Card--profile" />
            { badgeText && (<span className="Card--note">
                {badgeText}
            </span>)}
            <div className="Card--rating">
                <img src="src/assets/img/star.png" alt="Star" className="Card--rating-star" />
                <p className="Card--rating-text">
                    {data.stats.rating} ({data.stats.reviewCount}).{data.location}
                </p>
            </div>
            <p className="Card--info">
                {data.title}
            </p>
            <p className="Card--price">
               <b>From {data.price}$</b> / person
            </p>
        </div>
    );
}