import React from 'react';
import './Modal.scss'

const Modal = ({ children, closeModal }) => {

    return (
        <div className="modal" onClick={closeModal} >
            <div className="modalContent" onClick={(e)=>e.stopPropagation()} >
              {children}
            </div>
        </div>
    );

};

export default Modal;