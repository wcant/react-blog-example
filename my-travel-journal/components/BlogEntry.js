import React from 'react'

export default function Navbar(props) {
    return (
        <div className="blog-entry">
            <img className="blog--thumbnail" src={props.imageUrl} />
            <div>
               <p>  
                    <img src="../images/geopin.png" />
                    <span className="blog--location">{props.location}</span>
                    <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
               </p>
               <h2>{props.title}</h2>
               <p className="blog--date">{props.startDate + " - " + props.endDate}</p>
               <p>{props.description}</p>
            </div>
        </div>
    )   
}