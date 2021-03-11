import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './League.css';

const League = (props) => {
    const {strLeague, strSport, idLeague} = props.league;
    const history = useHistory();

    const clickHandle = (id) => {
        history.push(`/league/${id}`)
    }

    return (
        <div className="col-md-4 my-3">
            <div className="card custom-style text-center">
                <div className="card-body">
                    <h5 className="card-title">{strLeague}</h5>
                    <p className="card-text">Sports type: {strSport}</p>         
                    <button className="btn btn-secondary" onClick={() => clickHandle(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default League;