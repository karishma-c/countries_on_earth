import React from 'react';
import './Modal.scss'

const Modal = ({ children}) => {

    return (
        <div className="modal">
            <div className="modalContent" onClick={(e)=>e.stopPropagation()} >
              {children}
            </div>
        </div>
    );

};

export default Modal;