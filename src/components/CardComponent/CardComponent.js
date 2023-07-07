import React from "react";
import './CardComponent.scss';

const CardComponent = ({ countryDetails }) => {
    
    return (

        <div className="card">
            <div className="flagImage">
                <img src={countryDetails.flags.png} alt="country" />
            </div>
            <h3 className="countryName">{countryDetails.name.common}</h3>
            <h5 className="population"> <b>Population: </b>{countryDetails.population}</h5>
            <h5 className="countryRegion"> <b>Region: </b>{countryDetails.region}</h5>
            <h5 className="countryCapital"> <b>Capital: </b>{countryDetails.capital || '-'}</h5>
        </div>

    )

}

export default CardComponent;