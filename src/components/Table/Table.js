import React from "react";
import './Table.scss';

const Table = ({ children }) => {

    return (
        <div className="tableSection">
            <table className="table">
                {children}
            </table>
        </div>
    )

}

export default Table;