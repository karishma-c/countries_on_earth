import React, { useState } from "react";
import Modal from './../Modal/Modal';
import './Table.scss';

const Table = ({ children }) => {

    // const [showCard, setShowCard] = useState(false);
    // const [selectedRow, setSelectedRow] = useState("");

    

    // const showDetails = (rowData) => {
    //     setShowCard(true);
    //     setSelectedRow(rowData)
    // }

    // const closeModal = () => {
    //     setShowCard(false);
    // }
    
    return (
        <div className="tableSection">
            <table className="table">
                {children}
            </table>
            {/* {
                showCard && 
                <Modal>
                    <span className="closeButton" onClick={closeModal}>
                        x
                    </span>
                    {selectedRow.firstName + ' ' + selectedRow.lastName} 
                </Modal>
            } */}
        </div>
    )

}

export default Table;