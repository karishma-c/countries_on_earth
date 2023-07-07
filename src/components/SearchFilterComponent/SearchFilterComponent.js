import React, { useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import './SearchFilterComponent.scss';

const SearchFilterComponent = ({ searchData }) => {

    const [searchValue, setSearchValue] = useState("");
    const [selectValue, setSelectValue] = useState("");

    const handleSearchChange = e => {
        setSearchValue(e.target.value);
    };

    const handleSelectChange = e => {
        setSelectValue(e.target.value);
    };

    const filteredCountry = searchData.filter(
        country => {
            country.region.toLowerCase() === selectValue 
            return (
                country
                .region.toLowerCase()
                .includes(selectValue.toLowerCase())
            )
        }
    )

    const searchedCountry = searchData.filter(
        country => {
            return (
                country
                .name.common
                .toLowerCase()
                .includes(searchValue.toLowerCase()) 
            )
        }
    )

    return (
        <div className='searchFilter'>
            <div className="searchFilterInput">
                <div className='search-element'>
                    <input
                        className="searchInputField"
                        type = "search" 
                        placeholder='Search for country...'
                        onChange = {handleSearchChange}
                    />
                </div>
                <div className='filter-element'>
                    <select className="selectInputField" value={selectValue} onChange={handleSelectChange}>
                        <option value="">Filter By Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="asia">Asia</option>
                        <option value="antarctic">Antarctic</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>
            <div className="cardContainer">
            {
                selectValue ?
                filteredCountry.map(countryDetails => {
                    return <CardComponent countryDetails={countryDetails} />
                })
                :
                searchedCountry.map(countryDetails => {
                    return <CardComponent countryDetails={countryDetails} />
                })
            }
            </div>
        </div>
    )

}

export default SearchFilterComponent;