import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import male from '../../images/Players/male.png';
import female from '../../images/Players/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faMars, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import './LeagueDetail.css'

const LeagueDetail = () => {
    const {id} = useParams();
    const [detail, setDetail] = useState({});

    const {strLeague, strGender, intFormedYear, strCountry, strSport, strDescriptionEN, strFacebook, strYoutube,
        strTwitter, strBanner, strDescriptionFR, strBadge} = detail;

        const bannerStyle={
            width: "100%",
            height: "250px",
            backgroundImage: `url(${strBanner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setDetail(data.leagues[0]));
    }, []);

    return (
        <>
            <div className="banner-div" style={bannerStyle}>
                <div className="overlay">
                    <div className="league-logo">
                        <img src={strBadge} alt=""/>
                    </div>
                </div>    
            </div>

            <div className="container">
                <div className="main-detail-part d-flex justify-content-between p-4 my-4 bg-secondary">
                    <div className="text-light">
                        <h3>{strLeague}</h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <span className="m-2">Founded: {intFormedYear}</span></p>
                        <p><FontAwesomeIcon icon={faFlag} /> <span className="m-2">Country: {strCountry}</span></p>
                        <p><FontAwesomeIcon icon={faFutbol} /> <span className="m-2">Sport Type: {strSport}</span></p>
                        <p><FontAwesomeIcon icon={faMars} /> <span className="m-2">Gender: {strGender}</span></p>
                    </div>

                    <div className="player-image-box">
                        {
                            strGender === "Male" ? <img src={male} alt=""/> : <img src={female} alt=""/>
                        }
                    </div>

                </div>

                <div>
                    <p>{strDescriptionEN}</p><br/>
                    <p>{strDescriptionFR}</p>
                </div>

                <div className="icons pb-3">
                    <a href={`https://${strTwitter}`} target="_blank" class="text-secondary"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href={`https://${strFacebook}`} target="_blank" class="text-secondary"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href={`https://${strYoutube}`} target="_blank" class="text-secondary"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
            </div>
        </>
    );
};

export default LeagueDetail;