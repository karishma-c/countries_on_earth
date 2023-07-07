import React, { useState } from "react";
import './FilterComponent.scss';

const FilterComponent = () => {

    const[selectedOption, setSelectedOption] = useState("")

    // const filteredCountry = filterData.filter (
    //     country => {
    //         if(country.region === selectedOption)
    //         {
    //             console.log(country,"country");
    //             // return (
    //             //     country.region
    //             //     .toLowerCase() 
    //             // );
    //         }
    //     }
    // );
    
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }
    
    return (

        <div className='filter'>
            <div className="selectInput">
                <div className='form-element'>
                    <select id="selectInputField" onChange={handleChange}>
                        <option value="">Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="america">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div className="cardContainer">
            {/* {
                filteredCountry.map(countryDetails => {
                    return <CardComponent countryDetails={countryDetails} />
                })
            } */}
            </div>
        </div>
    )
}

export default FilterComponent;