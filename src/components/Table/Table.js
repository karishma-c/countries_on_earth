import React, { useState } from "react";
import Modal from './../Modal/Modal';
import './Table.scss';

const Table = ({ tableRowData }) => {

    const [showCard, setShowCard] = useState(false);
    const [selectedRow, setSelectedRow] = useState("");
    let tableHeader = [
        "Flag",
        "Country Name", 
        "Capital",
        "Population",
        "Region"
    ]

    const showDetails = (rowData) => {
        setShowCard(true);
        setSelectedRow(rowData)
    }

    const closeModal = () => {
        setShowCard(false);
    }
   
    const renderTableHeader = tableHeader.map((rowHeader,index) => {
        return  (
            <th key={index}>{rowHeader}</th>
        )    
    })

    const renderTableRow = tableRowData.map((rowData,index) => {
        return (
            <tr key={index} className="tableRow" onClick={() => showDetails(rowData)} >
                <td>
                    <img src={rowData.flags.png} alt="country" />
                </td>
                <td>{rowData.name.common}</td>
                <td>{rowData.capital}</td>
                <td>{rowData.population}</td>
                <td>{rowData.region}</td>
            </tr>
        )
    })
    
    return (
        <div className="tableSection">
            <table className="table">
                <thead>
                    <tr>
                    {renderTableHeader}
                    </tr>
                </thead>
                <tbody>
                    {renderTableRow}
                </tbody>
            </table>
            {
                showCard && 
                <Modal>
                    <span className="closeButton" onClick={closeModal}>
                        x
                    </span>
                    {selectedRow.firstName + ' ' + selectedRow.lastName} 
                </Modal>
            }
        </div>
    )

}

export default Table;