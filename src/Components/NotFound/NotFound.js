import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="text-danger d-flex justify-content-center align-items-center custom-css">
            <h2><FontAwesomeIcon icon={faExclamationTriangle} /> Page Not Found <FontAwesomeIcon icon={faExclamationTriangle} /></h2>
        </div>
    );
};

export default NotFound;