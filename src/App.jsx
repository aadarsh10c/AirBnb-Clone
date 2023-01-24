import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import dataSet from "./assets/data";

//console.log( dataSet );
export default function App () {
 const CardComponent = dataSet.map( data => {
   return (<Card 
        key = {data.id}
        item = {data}
       
    />)
 })
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <div className="Card__tile">
                {CardComponent}
            </div>
            
        </div>
    );
} 