import React, { useState, useEffect } from "react";
import CardComponent from "../CardComponent/CardComponent";
import Table from './../Table/Table';
import Modal from './../Modal/Modal';
import './SearchFilterComponent.scss';

const SearchFilterComponent = ({ searchData }) => {

    const [searchValue, setSearchValue] = useState("");
    const [selectValue, setSelectValue] = useState("");
    const [selectView, setSelectView] = useState("Card View");
    const [sortValue, setSortValue] = useState("");
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    let tableHeader = [
        "Flag",
        "Country Name", 
        "Capital",
        "Population",
        "Region"
    ]

    const renderTableHeader = tableHeader.map((rowHeader,index) => {
        return  (
            <th className="tableHeader" key={index}>{rowHeader}</th>
        )    
    })

    const handleSearchChange = e => {
        setSearchValue(e.target.value);
    };

    const handleSelectChange = e => {
        setSelectValue(e.target.value);
    };

    const handleSelectView = e => {
        setSelectView(e.target.value);
    };

    const handleSort = e => {
        setSortValue(e.target.value);
    }

    const handleModal = (countryData) => {
        setShowModal(true);
        setSelectedCountry(countryData)
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const searchedCountry = searchData.filter(
        country => {
            return (
                country
                .name.common
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
                country.region
                .toLowerCase()
                .includes(searchValue.toLowerCase())
            )
        }
    )

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

    const sortedCountry = searchData.sort((countryA,countryB) => {
        countryA = countryA.name.common;
        countryB = countryB.name.common;
        if(sortValue == "Ascending") {
            return ((countryA < countryB) ? -1 : ((countryA > countryB) ? 1 : 0));
        }
        else { 
            return ((countryA > countryB) ? -1 : ((countryA < countryB) ? 1 : 0)); 
        }
    })

    const setDimension = () => {
        setScreenSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", setDimension);
        return () => {
            window.removeEventListener("resize", setDimension);
        };
    }, [screenSize]);

    return (
        <div className='searchFilter'>
            <div className="searchFilterInput">
                <div className='searchElement'>
                    <input
                        className="searchInputField"
                        type = "search" 
                        placeholder='Search for country...'
                        onChange = {handleSearchChange}
                    />
                </div>
                <div className="sortElement">
                    <select className="selectSortField" value={sortValue} onChange={handleSort}>
                        <option value="">Sort by</option>
                        <option value="Ascending">Ascending</option>
                        <option value="Descending">Descending</option>
                    </select>
                </div>
                {
                    screenSize >= 700 &&
                    <div className="viewElement">
                        <select className="selectViewField" value={selectView} onChange={handleSelectView}>
                            <option value="Card View">Card View</option>
                            <option value="Table View">Table View</option>
                        </select>
                    </div>
                }
                <div className='filterElement'>
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
                    (selectView == "Table View" && screenSize >= 700) ?
                        
                        <Table>
                            <thead>
                                <tr>
                                    {renderTableHeader}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    selectValue ? 
                                    filteredCountry.map(countryDetails => {
                                        return  <tr className="tableRow" onClick={() => handleModal(countryDetails)} >
                                            <td className="tableCell" id="tableColumn">
                                                <img className="rowFlagImage" src={countryDetails.flags.png} alt="country" />
                                            </td>
                                            <td className="tableCell">{countryDetails.name.common}</td>
                                            <td className="tableCell">{countryDetails.capital || '-'}</td>
                                            <td className="tableCell">{countryDetails.population}</td>
                                            <td className="tableCell">{countryDetails.region}</td>
                                        </tr>
                                    })
                                    :
                                    sortValue ? 
                                    sortedCountry.map(countryDetails => {
                                        return  <tr className="tableRow" onClick={() => handleModal(countryDetails)} >
                                            <td className="tableCell" id="tableColumn">
                                                <img className="rowFlagImage" src={countryDetails.flags.png} alt="country" />
                                            </td>
                                            <td className="tableCell">{countryDetails.name.common}</td>
                                            <td className="tableCell">{countryDetails.capital || '-'}</td>
                                            <td className="tableCell">{countryDetails.population}</td>
                                            <td className="tableCell">{countryDetails.region}</td>
                                        </tr>
                                    })
                                    :
                                    searchedCountry.map(countryDetails => {
                                        return  <tr className="tableRow" onClick={() => handleModal(countryDetails)} >
                                            <td className="tableCell" id="tableColumn">
                                                <img className="rowFlagImage" src={countryDetails.flags.png} alt="country" />
                                            </td>
                                            <td className="tableCell">{countryDetails.name.common}</td>
                                            <td className="tableCell">{countryDetails.capital || '-'}</td>
                                            <td className="tableCell">{countryDetails.population}</td>
                                            <td className="tableCell">{countryDetails.region}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                            {
                                showModal && 
                                <Modal>
                                    <span className="closeButton" onClick={closeModal}>
                                        x
                                    </span>
                                    <div className="modalCard" >
                                        
                                        <div className="cardFlagImage">
                                            <img src={selectedCountry.flags.png} alt="country" />
                                        </div>
                                        <h3 className="countryName"> {selectedCountry.name.common}</h3>
                                        <h5 className="population"> <b>Population: </b>{selectedCountry.population}</h5>
                                        <h5 className="countryRegion"> <b>Region: </b>{selectedCountry.region}</h5>
                                        <h5 className="countryCapital"> <b>Capital: </b>{selectedCountry.capital || '-'}</h5>
                                        <h5 className="countrySubRegion"> <b>SubRegion: </b>{selectedCountry.subregion || '-'}</h5>
                                        <div className="countryBorders"> <b>Borders: </b>
                                            <h5 className="borders">
                                                {
                                                    selectedCountry.borders ? 
                                                        selectedCountry.borders.map(border => {
                                                            return border
                                                        }).join(',')
                                                    :
                                                    '-'    
                                                }
                                            </h5>
                                        </div>
                                    </div>
                                </Modal>
                            }
                        </Table>
                    :
                    selectValue ?
                    filteredCountry.map(countryDetails => {
                        return <CardComponent countryDetails={countryDetails} />
                    })
                    :
                    sortValue ?
                    sortedCountry.map(countryDetails => {
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