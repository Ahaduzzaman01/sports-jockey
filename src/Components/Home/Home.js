import React, { useState, useEffect } from 'react';
import './Home.css'
import League from '..//League/League';
import Header from '../Header/Header';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
      const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php";
      fetch(url)
      .then(res => res.json())
      .then(data => setLeagues(data.leagues))
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="row mt-4">
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;