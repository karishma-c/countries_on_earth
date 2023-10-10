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
                        <div className="modalCard" >
                            <span className="closeButton" onClick={closeModal}>
                                x
                            </span>
                            <div className="flagImage">
                                <img src={selectedCountry.flags.png} alt="country" />
                            </div>
                            <h3 className="countryName"> {selectedCountry.name.common}</h3>
                            <h5 className="population"> <b>Population: </b>{selectedCountry.population}</h5>
                            <h5 className="countryRegion"> <b>Region: </b>{selectedCountry.region}</h5>
                            <h5 className="countryCapital"> <b>Capital: </b>{selectedCountry.capital || '-'}</h5>
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