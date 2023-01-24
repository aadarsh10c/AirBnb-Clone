import React from "react";

export default function Hero () {
    return (
        <div className="hero">
            <div className="hero--img">
                <img src="src/assets/img/photo-grid.png" alt="" className="hero--img-grid" />
            </div>
            <div className="hero--text">
                <h2>
                    Online Expieriences
                </h2>
                <p>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
                </p>
            </div>
        </div>
    );
}