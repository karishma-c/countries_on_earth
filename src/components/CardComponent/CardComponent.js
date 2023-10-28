import React, {useState} from "react";
import Modal from './../Modal/Modal';
import './CardComponent.scss';

const CardComponent = ({ countryDetails }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    
    const handleModal = (countryData) => {
        setShowModal(true);
        setSelectedCountry(countryData);
    }

    const closeModal = () => {
        setShowModal(false);
    }
    
    return (

        <>
            {
                showModal ?
                
                    <Modal>
                        <span className="closeButton" onClick={closeModal}>
                            <svg id="closeIcon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="26" height="26" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M18 6l-12 12" />
                                <path d="M6 6l12 12" />
                            </svg>
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
                :
                <div className="card" onClick={() => handleModal(countryDetails)}>
                    <div className="flagImage">
                        <img src={countryDetails.flags.png} alt="country" />
                    </div>
                    <h3 className="countryName">{countryDetails.name.common}</h3>
                    <h5 className="population"> <b>Population: </b>{countryDetails.population}</h5>
                    <h5 className="countryRegion"> <b>Region: </b>{countryDetails.region}</h5>
                    <h5 className="countryCapital"> <b>Capital: </b>{countryDetails.capital || '-'}</h5>
                </div>
            }
        </>

    )

}

export default CardComponent;